from bs4 import BeautifulSoup
from flask import Flask, Response, render_template, request

app = Flask(__name__)

status = [{"button" + str(j): False for j in range(5)} for i in range(5)]


@app.route("/", methods=["GET", "POST"])
def Controller():
    if request.method == "GET":
        return render_template("controller" + request.args.get("controller") + ".html")
    if request.method == "POST":
        data = request.json
        with open("template.html", "rb") as file:
            html = file.read()
        soup = BeautifulSoup(html, "html.parser")
        soup.title = "Controller" + data["controller"]
        htmlBody = ""
        button = ["leftForward", "rightForward", "leftReverse",
                  "rightReverse", "speedBoost", "rightTurn", "leftTurn"]
        for i in range(len(data["button"])):
            htmlBody += "<button type='button' id='" + \
                button[data["button"][i]] + "Button'></button>"
        soup.body.append(htmlBody)
        with open("controller" + data["controller"] + ".html", "rb") as file:
            file.write(soup.prettify())
        with open("controller" + data["controller"] + ".css", "wb") as file:
            file.write(data["css"])
        return Response(status=204)


@app.route("/change-status", methods=["GET"])
def ChangeStatus():
    status[int(request.args.get("controller"))][int(request.args.get(
        "button"))] = not status[int(request.args.get("controller"))][int(request.args.get("button"))]
    return Response(status=204)


@app.route("/return-status", methods=["GET"])
def ReturnStatus():
    return status[int(request.args.get("controller"))]


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)
