import React from 'react';

const Info = () => {
    const artistas = [
        { 
            nombre: "Shakira", 
            descripcion: "Shakira Isabel Mebarak Ripoll (Barranquilla, 2 de febrero de 1977), conocida simplemente como Shakira, es una cantante, compositora, productora, bailarina, multinstrumentista, empresaria y actriz colombiana.", 
        },
        { 
            nombre: "Karol G", 
            descripcion: "Carolina Giraldo Navarro, conocida artísticamente como Karol G, es una cantante, compositora y empresaria colombiana. Su carrera se ha destacado por emplear los estilos de reguetón y pop urbano, aunque también ha incursionado con otros estilos musicales urbanos y latinoamericanos.", 
        },
        { 
            nombre: "J Balvin", 
            descripcion: "José Álvaro Osorio Balvin, más conocido por su nombre artístico J Balvin, es un cantante, rapero y productor colombiano, reconocido como uno de los artistas latinos más exitosos del mundo, con ventas de treinta y cinco millones de álbumes y sencillos a nivel mundial", 
        },
        { 
            nombre: "Maluma", 
            descripcion: "Juan Luis Londoño Arias, conocido artísticamente como Maluma, es un cantante, empresario y compositor colombiano.​ Saltó a la fama en su país natal en 2011, gracias a los sencillos «Farandulera», «Obsesión», y «La temperatura»; y con «Carnaval», en el resto de América Latina", 
        }
    ];

    const Tarjeta = ({ nombre, descripcion, imagen }) => {
        return (
            <div style={styles.tarjeta}>
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
            </div>
        );
    };

    return (
        <div style={styles.contenedor}>
            {artistas.map((artista, index) => (
                <Tarjeta 
                    key={index} 
                    nombre={artista.nombre} 
                    descripcion={artista.descripcion} 
                />
            ))}
        </div>
    );
};

const styles = {
    contenedor: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    tarjeta: {
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        width: '250px',
        textAlign: 'center',
        margin: '16px'
    },
    imagen: {
        width: '100%',
        height: 'auto',
        borderRadius: '4px'
    }
};

export default Info
