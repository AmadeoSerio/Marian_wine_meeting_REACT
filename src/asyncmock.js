const misProductos = [
    { id: 1, nombre: "Luigi Bosca", varietal: "Malbec", precio: 3859, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCR3Y6K1cUFUKMv27JtdAEltCmda1k6SvXJed8lmoaebc3VkaFePXSE1pXMw7h1EnRC0OZwzjGzo1NB4XYcI9RQwg7n=s2560" },
    { id: 2, nombre: "Bad Brothers Facon Selection", varietal: "Syrah", precio: 14699, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCh-N8pZjlAxTSEvlNddDeCjKf1O3OuyXoNWlsGRyK2NBgXNwG94Cif3omIBnNpDQFuLtYxSJ8u_G21UBV6Pv58bUgAew=s2560" },
    { id: 3, nombre: "La Mascota", varietal: "Malbec", precio: 4750, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBK84vKH9S0Ps_8aidPGrjeFwc-pPZrst461b58A95ZzrPkOVXIXmAdy6IrE2Os5cYxDxXgfiaA_hvEinaG1fGbY5h4=s2560" },
    { id: 4, nombre: "Kaiken Ultra", varietal: "Cabernet sauvignon", precio: 5454, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaC416NpdTObexy4E1Fa5cKidHzPz8Yz3jhs6XD85JcNpG2TZY1WVBs7n3FIR_EJRcVVgMJXNGa6keHBN2OerPSMm2qRnA=s2560" },
    { id: 5, nombre: "Angelica Zapata", varietal: "Malbec", precio: 12038, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAT59nVjvfII-M7-EvUn5cJ1jF2Tfaimwkvi6Qg4skcHs5ba7kU-8TSXdyd7ZUTMj7WHtXs5CGQfzkxDuFEpxSLAYblDQ=s2560" },
    { id: 6, nombre: "Fernando Dupont Sikuri", varietal: "Syrah", precio: 9360, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaARU6WW3fjzowjTo4E_VTMaVfPdY9SkMUM_grCAAfcVWwD6eFrRYTy1L6jsTQnBbwEB5DaqCltLDz-Cd4QNRMAqxVo-rw=s2560" },
    { id: 7, nombre: "Lopez", varietal: "Cabernet sauvignon", precio: 12860, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBct6wKJLjLSeSLhrgTSvnhz88bKafNc0ps_-osawaMcB5I0GkmcRQg1DVeIoytyYI1PUQmG0vMcS1DieXucf9vjmCC=s2560" },
    { id: 8, nombre: "D.V. Catena, V.D. Adrianna Vineyard", varietal: "Malbec", precio: 12950, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDgJHpqDKg_T7U311XGUglzqqx8tgy_nWrVi61uGyOLY99NNN1HVfxckxG_azLhHlT-yfFzT-rRoR-9ToEYh6CeH4dGVQ=s2560" },
    { id: 9, nombre: "Lui Reserva", varietal: "Malbec", precio: 4200, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDt7lIGkp-frOmrU4TcOlQMWkj8QldsEwrF-Gg4SuK0GDYS3R3hWkz1r7sxrnJp6Ds3gqGW8Gv8UAMlsshIDxny9qfKug=s2560" },
    { id: 10, nombre: "Pasarisa", varietal: "Cabernet sauvignon", precio: 22800, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaArthTCPssLt9Ijq4dxr-5P8U4k5Mmb4IKLH_HL1uYfud5eZDg3rj0DQKS8b7qqr2JSkez94WUtEzr8GtANTqTNwUxH6A=s2560" },
    { id: 11, nombre: "José Zuccardi", varietal: "Malbec", precio: 19465, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBw9ovk-p2w1zEEzmwD1ONSwOFaJnuJR-5JsCnPgQQwM3xYth7qwHAe-QdYvynK1n8_4qgEZIb1IzPowQHvej66EnK3=s2560" },
    { id: 12, nombre: "Azul Gran Reserva", varietal: "Syrah", precio: 16041, img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBOpGhJMxgvsT4mJtUeKtfEgmsVVLw1wm2ec_JJ27Msrk02y7yPWMi3QEX8DfBDbhvJupQBOUdTmagMVES1HrzoM1FevA=s2560" }
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 2000)
    })
}