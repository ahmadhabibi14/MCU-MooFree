import React, { useState } from "react";

function Light(props) {
  const [on, setOn] = React.useState(false);

  return (
    <button className={`light ${ on ? 'light-on' : 'light-off'}`} onClick={()=>{ setOn(!on); }}>
      { on ? 'ON' : 'OFF' }
    </button>
  );
}

function News() {
  return (
    <div className="news">
      <p>Some News will appeare Here, just wait !! <br/> This button using Hook btw ⬇⬇⬇⬇</p>
      <Light />
    </div>
  );
}

export default News;