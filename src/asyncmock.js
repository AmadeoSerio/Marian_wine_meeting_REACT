const misProductos = [
    { id: "1", nombre: "Luigi Bosca", varietal: "Malbec", precio: 3859, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCR3Y6K1cUFUKMv27JtdAEltCmda1k6SvXJed8lmoaebc3VkaFePXSE1pXMw7h1EnRC0OZwzjGzo1NB4XYcI9RQwg7n=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Argentina, con aroma a frutos rojos, añejamiento de 12 meses en barrica, ideal para carnes rojas y pastas. Graduación alcohólica de 14%." },
    { id: "2", nombre: "Bad Brothers Facon Selection", varietal: "Syrah", precio: 14699, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCh-N8pZjlAxTSEvlNddDeCjKf1O3OuyXoNWlsGRyK2NBgXNwG94Cif3omIBnNpDQFuLtYxSJ8u_G21UBV6Pv58bUgAew=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Cafayate, Salta, Argentina. Composición 100% Syrah. Crianza doce meses en tanques de cemento. Potencial de guarda 10 años. Nota de cata: grafito, intenso, romero, dátiles secos, ciruelas, gran volumen en boca. Buena acidez y excelente equilibrio con madera. Final muy largo. Enólogo: Agustín Lanús." },
    { id: "3", nombre: "La Mascota", varietal: "Malbec", precio: 4750, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBK84vKH9S0Ps_8aidPGrjeFwc-pPZrst461b58A95ZzrPkOVXIXmAdy6IrE2Os5cYxDxXgfiaA_hvEinaG1fGbY5h4=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Mendoza, Argentina. Color rojo púrpura intenso con tonalidades rubí. Despliega aromas a frutas negras, mermelada y vainilla, con un sutil toque de regaliz. De entrada dulce en boca, con taninos intensos y un final placentero y persistente." },
    { id: "4", nombre: "Kaiken Ultra", varietal: "Cabernet", precio: 5454, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaC416NpdTObexy4E1Fa5cKidHzPz8Yz3jhs6XD85JcNpG2TZY1WVBs7n3FIR_EJRcVVgMJXNGa6keHBN2OerPSMm2qRnA=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Mendoza, Argentina. Graduación Alcohólica: 14,5%, presenta un color rojo con tonos violáceos. Maduración en barricas de Roble Francés 1/3 nueva y 2/3 de 2do/3er uso. Presenta aromas a frutos negros que evocan caracteres a arándanos y moras con notas especiadas y florales." },
    { id: "5", nombre: "Angelica Zapata", varietal: "Malbec", precio: 12038, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAT59nVjvfII-M7-EvUn5cJ1jF2Tfaimwkvi6Qg4skcHs5ba7kU-8TSXdyd7ZUTMj7WHtXs5CGQfzkxDuFEpxSLAYblDQ=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Mendoza, Argentina. Presenta un color rojo rubí con suaves tonalidades violáceas. Posee aroma intenso y concentrado con notas de cassis, grosellas maduras, y toques de vainilla y especias dulces como pimienta negra y clavo de olor. De impacto dulce y excelente estructura en boca, muestra frutos rojos maduros con marcados dejos a eucalipto y pimienta negra. Este vino posee ahora un final bien estructurado y persistente." },
    { id: "6", nombre: "Fernando Dupont Sikuri", varietal: "Syrah", precio: 9360, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaARU6WW3fjzowjTo4E_VTMaVfPdY9SkMUM_grCAAfcVWwD6eFrRYTy1L6jsTQnBbwEB5DaqCltLDz-Cd4QNRMAqxVo-rw=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Jujuy, Argentina. Color rojo muy intenso, bordes violetas, fondo negro y brillante. Aroma intenso, notas ahumadas y especiadas. En boca, ataque medio, cuerpo intenso, repite los aromas que encontramos en la nariz, fresco, de acidez marcada, con taninos intensos y final largo. Típico syrah de gran complejidad y frescura, notas de carnes ahumadas, aceitunas negras y pimienta negra." },
    { id: "7", nombre: "Lopez", varietal: "Cabernet", precio: 12860, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBct6wKJLjLSeSLhrgTSvnhz88bKafNc0ps_-osawaMcB5I0GkmcRQg1DVeIoytyYI1PUQmG0vMcS1DieXucf9vjmCC=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Mendoza, Argentina. Vino de color rubí profundo, con leves tonos caoba y aromas intensos. En boca revela una excelente estructura con taninos suaves y untuosos presentando un largo final." },
    { id: "8", nombre: "D.V. Catena, V.D. Adrianna Vineyard", varietal: "Malbec", precio: 12950, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDgJHpqDKg_T7U311XGUglzqqx8tgy_nWrVi61uGyOLY99NNN1HVfxckxG_azLhHlT-yfFzT-rRoR-9ToEYh6CeH4dGVQ=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Mendoza, Argentina. Es un vino elegante y complejo, de color rojo profundo con reflejos violetas. A la nariz, intenso y concentrado, presenta notas de cassis, frambuesa y violetas, características del Malbec del viñedo Adrianna, acompañadas por vainilla, tabaco y licor aportadas por la crianza en roble. En boca, de impacto dulce y gran complejidad, es amplio, con taninos suaves y redondos, de final largo y persistente." },
    { id: "9", nombre: "Lui Reserva", varietal: "Malbec", precio: 4200, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDt7lIGkp-frOmrU4TcOlQMWkj8QldsEwrF-Gg4SuK0GDYS3R3hWkz1r7sxrnJp6Ds3gqGW8Gv8UAMlsshIDxny9qfKug=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Mendoza, Argentina. En nariz aparece la fruta bien asentada. En boca es joven, con buena acidez o nervio. Solo el 60% del vino pasa 10 meses por barricas neutras de tercer uso (o más) para que la madera no sea un componente fundamental. " },
    { id: "10", nombre: "Pasarisa", varietal: "Cabernet", precio: 22800, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaArthTCPssLt9Ijq4dxr-5P8U4k5Mmb4IKLH_HL1uYfud5eZDg3rj0DQKS8b7qqr2JSkez94WUtEzr8GtANTqTNwUxH6A=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Salta, Argentina. Pasarisa, es una palabra compuesta de las dos primeras letras de Patagonia, Salta y La Rioja, que termina con las iniciales de Sudamérica. Nueva gama de Laura Catena trabajada con los cultivos de esas regiones." },
    { id: "11", nombre: "José Zuccardi", varietal: "Malbec", precio: 19465, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBw9ovk-p2w1zEEzmwD1ONSwOFaJnuJR-5JsCnPgQQwM3xYth7qwHAe-QdYvynK1n8_4qgEZIb1IzPowQHvej66EnK3=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Mendoza, Argentina. Intenso rojo. Una nariz compleja en la que destacan aromas a frutos negros y rojos, con sutiles notas especiadas. Taninos firmes y maduros que dan estructura al vino. La acidez aporta frescura y elegancia. De final muy persistente." },
    { id: "12", nombre: "Azul Gran Reserva", varietal: "Syrah", precio: 16041, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBOpGhJMxgvsT4mJtUeKtfEgmsVVLw1wm2ec_JJ27Msrk02y7yPWMi3QEX8DfBDbhvJupQBOUdTmagMVES1HrzoM1FevA=s2560", descripcion: "Lo que tenés que saber de este producto: Origen Mendoza, Argentina. A la vista se percibe un color un rojo profundo con destellos violáceos. En la nariz grosellas, pimienta negra, cuero, chocolate y algunas notas florales. En la boca nos encontramos un vino con carácter y estructura pero con taninos dulces y agradables. Crianza de 18 meses en barrica de roble francés y americano de primer uso." }
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getVarietal = (varietalCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const categoriaVarietal = misProductos.filter(item => item.varietal.toLowerCase() === varietalCategoria);
            resolve(categoriaVarietal);
        }, 2000)
    })
}