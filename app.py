from bs4 import BeautifulSoup
from flask import Blueprint, Flask, Response, render_template, request

app = Flask(__name__)
blueprint = Blueprint("controller", __name__, url_prefix="/controller")

status = [{"button": [False for j in range(5)]} for i in range(5)]


@blueprint.route("/", methods=["GET", "POST"])
def Controller():
    if request.method == "GET":
        return render_template("controller" + request.args.get("controller") + ".html")
    if request.method == "POST":
        data = request.json
        with open("templates/template.html", "rb") as file:
            html = file.read()
        soup = BeautifulSoup(html, "html.parser")
        soup.title = "Controller" + str(data["controller"])
        htmlBody = ""
        button = ["leftForward", "leftReverse", "rightForward",
                  "rightReverse", "speedBoost", "rightTurn", "leftTurn"]
        for i in range(len(data["button"])):
            button_element = soup.new_tag("button", id=button[data["button"][i]] + "Button")
            svg_file_path = f"src/assets/{button[data['button'][i]]}.svg"  # svgファイルのパスを動的に変更

            with open(svg_file_path, "r") as svg_file:
                svg_content = svg_file.read()

            button_element.append(BeautifulSoup(svg_content, "html.parser").svg)
            htmlBody += str(button_element)
            
        soup.body.append(BeautifulSoup(htmlBody))
        with open("templates/controller" + str(data["controller"]) + ".html", "w") as file:
            file.write(soup.prettify())
        with open("static/controller" + str(data["controller"]) + ".css", "w") as file:
            file.write(data["css"])
        return Response(status=204)


@app.route("/controller/static/<path:path>")
def serveStatic(path):
    return app.send_static_file(path)


@blueprint.route("/change-status", methods=["GET"])
def ChangeStatus():
    status[int(request.args.get("controller"))]["button"][int(
        request.args.get("button"))] = bool(int(request.args.get("status")))
    return Response(status=204)


@blueprint.route("/return-status", methods=["GET"])
def ReturnStatus():
    return status[int(request.args.get("controller"))]


app.register_blueprint(blueprint)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)
