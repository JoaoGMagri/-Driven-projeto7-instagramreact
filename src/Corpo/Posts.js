import Post from "./PostsCorpo/Post";
import ObjetoPost from "../Objetos/ObjetoPosts";

export default function Posts() {

    const array = ObjetoPost()
    return (

        <div className="posts">
            {array.map((item,i) => <Post
                image={item.image}
                texto={item.texto}
                imagepost={item.imagepost}
                imagecurtida={item.imagecurtida}
                ultimacurtida={item.ultimacurtida}
                totaldecuridas={item.totaldecuridas}
                id ={i}
                key={i} />
            )}
        </div>

    )

}