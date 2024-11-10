import React, { useState } from 'react';

const Lista = () => {
    const [visibleItems, setVisibleItems] = useState({});

    const elementos = [
        { nombre: "Top 1 - Shakira", imagen: "https://i.scdn.co/image/ab6761610000e5eb2528c726e5ddb90a7197e527", id: "img1" },
        { nombre: "Top 2 - Karol G ", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2023-11-16_Gala_de_los_Latin_Grammy%2C_15.jpg/1200px-2023-11-16_Gala_de_los_Latin_Grammy%2C_15.jpg", id: "img2" },
        { nombre: "Top 3 - J Balvin ", imagen: "https://www.semana.com/resizer/v2/7T2Z4M5OWNBLJDILFZ4KC7EGRY.jpg?auth=449441a923740b3f5417927b25728e2494c444e586c5fbbe440b36107eb305a9&smart=true&quality=75&width=1280", id: "img3" },
        { nombre: "Top 4 - Maluma ", imagen: "https://d34ugyblrhxy34.cloudfront.net/wp-content/uploads/2021/07/05223429/maluma.jpg", id: "img4" }
    ];

    const toggleImage = (id) => {
        setVisibleItems((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleAllImages = () => {
        const areAllVisible = elementos.every(elemento => visibleItems[elemento.id]);
        setVisibleItems(areAllVisible ? {} : Object.fromEntries(elementos.map(el => [el.id, true])));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '10px', marginTop: '100px' }}>
            <button 
                onClick={toggleAllImages}
                style={{ marginBottom: '10px' }}
            >
                {elementos.every(elemento => visibleItems[elemento.id]) ? "Ocultar todo" : "Mostrar todo"}
            </button>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {elementos.map(elemento => (
                    <li 
                        key={elemento.id} 
                        onClick={() => toggleImage(elemento.id)}
                        style={{ cursor: 'pointer', marginBottom: '10px', textAlign: 'center' }}
                    >
                        {elemento.nombre}
                        {visibleItems[elemento.id] && (
                            <img 
                                src={elemento.imagen} 
                                alt={elemento.nombre} 
                                style={{ 
                                    marginLeft: '10px', 
                                    width: '150px', 
                                    height: '150px', 
                                    objectFit: 'cover', 
                                }}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lista;

