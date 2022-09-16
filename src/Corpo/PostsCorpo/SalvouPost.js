export default function SalvouPost(id) {

    const curtida = id.target
    
    if(curtida.name === "bookmark-outline")  {
        
        curtida.name = "bookmark";
    
    } else {

        curtida.name = "bookmark-outline";

    }

}