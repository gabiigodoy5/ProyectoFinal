import React, {useState} from "react";




const funcion = () => {
    console.log("Hola");
}



const HomeBody = (props) => {
    const [count, setCount] = useState (0);
    return(
        <main>
            <section>
                <h1>ESte es el body de nuestra página</h1>
            </section>

            <section>
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero voluptatibus doloremque consectetur eveniet? Repudiandae minus iusto rerum ratione totam ipsum, id, fugit, sequi illo modi ullam voluptas repellat quam soluta.
                    </p>
                    <p>Hiciste {count} clicks</p>

                    <button onClick={() => setCount(count + 1)}>FUNCA</button>            
                </div>

                
                

            </section>
        </main>
    );
};

export default HomeBody;