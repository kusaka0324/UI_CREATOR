export const controllerList= [
  {
    id       : 0,
    opsName  : '左前輪',
    className: 'leftForward',
    svgIconTag: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>`,
		defaultStyle: 
`#leftForward{ /*左車輪前進*/
  position:absolute;
  top:0%; /*ボタンの垂直方向の配置位置*/
  left:0%; /*ボタンの水平方向の配置位置*/
  width:10vw; /*ボタンの幅*/
  height:20vh; /*ボタンの高さ*/
  background:grey; /*ボタンの色*/
  border:none; /*ボタンの枠色*/
  border-radius:0px; /*ボタンの角を丸める*/
}
#leftForward svg{
  color:black; /*アイコンの色*/
  width:16px;  /*アイコンの大きさ*/
}
`
  },
  {  
    id       : 1,
    opsName  : '左後輪',
    className: 'leftReverse',
    svgIconTag: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>`,
		defaultStyle: 
`#leftReverse{ /*左車輪後進*/
  position:absolute;
  top:0%; /*ボタンの垂直方向の配置位置*/
  left:10%; /*ボタンの水平方向の配置位置*/
  width:10vw; /*ボタンの幅*/
  height:20vh; /*ボタンの高さ*/
  background:grey; /*ボタンの色*/
  border:none; /*ボタンの枠色*/
  border-radius:0px; /*ボタンの角を丸める*/
}
#leftReverse svg{
  color:black; /*アイコンの色*/
  width:16px;  /*アイコンの大きさ*/
}
`
  },
  {
    id       : 2,
    opsName  : '右前輪',
    className: 'rightForward',
    svgIconTag: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>`,
		defaultStyle: 
`#rightForward{ /*右車輪前進*/
  position:absolute;
  top:0%; /*ボタンの垂直方向の配置位置*/
  left:20%; /*ボタンの水平方向の配置位置*/
  width:10vw; /*ボタンの幅*/
  height:20vh; /*ボタンの高さ*/
  background:grey; /*ボタンの色*/
  border:none; /*ボタンの枠色*/
  border-radius:0px; /*ボタンの角を丸める*/
}
#rightForward svg{
  color:black; /*アイコンの色*/
  width:16px;  /*アイコンの大きさ*/
}
`
  },
  {
    id       : 3,
    opsName  : '右後輪',
    className: 'rightReverse',
    svgIconTag: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>`,
		defaultStyle: 
`#rightReverse{ /*右車輪後進*/
  position:absolute;
  top:0%; /*ボタンの垂直方向の配置位置*/
  left:30%; /*ボタンの水平方向の配置位置*/
  width:10vw; /*ボタンの幅*/
  height:20vh; /*ボタンの高さ*/
  background:grey; /*ボタンの色*/
  border:none; /*ボタンの枠色*/
  border-radius:0px; /*ボタンの角を丸める*/
}
#rightReverse svg{
  color:black; /*アイコンの色*/
  width:16px;  /*アイコンの大きさ*/
}
`
  },
  {
    id       : 4,
    opsName  : 'ブースト',
    className: 'speedBoost',
    svgIconTag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 23C7.85786 23 4.5 19.6421 4.5 15.5C4.5 13.3462 5.40786 11.4045 6.86179 10.0366C8.20403 8.77375 11.5 6.49951 11 1.5C17 5.5 20 9.5 14 15.5C15 15.5 16.5 15.5 19 13.0296C19.2697 13.8032 19.5 14.6345 19.5 15.5C19.5 19.6421 16.1421 23 12 23Z"></path></svg>`,
		defaultStyle: 
`#speedBoost{ /*スピードアップ*/
  position:absolute;
  top:0%; /*ボタンの垂直方向の配置位置*/
  left:40%; /*ボタンの水平方向の配置位置*/
  width:10vw; /*ボタンの幅*/
  height:20vh; /*ボタンの高さ*/
  background:grey; /*ボタンの色*/
  border:none; /*ボタンの枠色*/
  border-radius:0px; /*ボタンの角を丸める*/
}
#speedBoost svg{
  color:black; /*アイコンの色*/
  width:16px;  /*アイコンの大きさ*/
}
`
  },
  {
    id       : 5,
    opsName  : '右旋回',
    className: 'rightTurn',
    svgIconTag: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/></svg>`,
		defaultStyle: 
`#rightTurn{ /*左旋回*/
  position:absolute;
  top:0%; /*ボタンの垂直方向の配置位置*/
  left:50%; /*ボタンの水平方向の配置位置*/
  width:10vw; /*ボタンの幅*/
  height:20vh; /*ボタンの高さ*/
  background:grey; /*ボタンの色*/
  border:none; /*ボタンの枠色*/
  border-radius:0px; /*ボタンの角を丸める*/
}
#rightTurn svg{
  color:black; /*アイコンの色*/
  width:16px;  /*アイコンの大きさ*/
}
`
  },
  {
    id       : 6,
    opsName  : '左旋回',
    className: 'leftTurn',
    svgIconTag: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>`,
		defaultStyle: 
`#leftTurn{ /*右旋回*/
  position:absolute;
  top:0%; /*ボタンの垂直方向の配置位置*/
  left:60%; /*ボタンの水平方向の配置位置*/
  width:10vw; /*ボタンの幅*/
  height:20vh; /*ボタンの高さ*/
  background:grey; /*ボタンの色*/
  border:none; /*ボタンの枠色*/
  border-radius:0px; /*ボタンの角を丸める*/
}
#leftTurn svg{
  color:black; /*アイコンの色*/
  width:16px;  /*アイコンの大きさ*/
}
`
  },
];