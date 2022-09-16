import React, { useState } from "react"

export default function FundoPost(props) {


    const [salvouPost, setSalvouPost] = useState("bookmark-outline");
    const [curtiuPost, setCurtiuPost] = useState("heart-outline");
    const [curtidas, setCurtidas] = useState(props.totaldecuridas);
    const [cor, setCor] = useState("black");


    function funSalvouPost() {

        (salvouPost === "bookmark-outline") ? setSalvouPost("bookmark") : setSalvouPost("bookmark-outline");

    }

    function curtirIcone(val) {

        if (curtiuPost === "heart-outline") {

            setCurtiuPost("heart");
            setCor("red");
            setCurtidas(curtidas + 1);

        } else if(curtiuPost === "heart" && val == false){

            setCurtiuPost("heart-outline");
            setCor("black");
            setCurtidas(curtidas - 1);

        } else {
            return;
        }

    }


    return (
        <div>

            <div className="conteudo">
                <img onDoubleClick={() => curtirIcone(true)} src={props.imagepost} alt="" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={() => curtirIcone(false)} style={{ color: cor }} name={curtiuPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={funSalvouPost} name={salvouPost}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imagecurtida} alt="" />
                    <div className="texto">
                        Curtido por <strong>{props.ultimacurtida}</strong> e <strong>outras <span>{curtidas}</span> pessoas</strong>
                    </div>
                </div>
            </div>

        </div>

    )

}