const paginadiv = document.getElementById("pagina5");

function cargarContenido() {
    
    // Crear Header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Deluxe";
    header.appendChild(h1);
    document.body.appendChild(header);

    // Crear Nav
    const nav = document.createElement("nav");
    const links = [
        { href: "index.html", text: "Pagina Principal" },
        { href: "pickup.html", text: "Pick-Up" },
        { href: "sedan.html", text: "Sedan" },
        { href: "suv.html", text: "Suv" },
    ];

    links.forEach(linkData => {
        const link = document.createElement("a");
        link.href = linkData.href;
        link.textContent = linkData.text;
        nav.appendChild(link);
    });

    document.body.appendChild(nav);

    // Crear Contenedor de Tarjetas de Carros
    const carContainer = document.createElement("div");
    carContainer.id = "car-container";
    document.body.appendChild(carContainer);

    const deluxeCars = [
        {
            imgSrc: "img/corvet.jpeg",
            altText: "deluxe 1",
            model: "Corvette Stingray 2023 z51 70th Aniversario",
            price: "$2,320,000",
            year: 2023,
            mileage: "5,000 km",
            description: "El Chevrolet Corvette Stingray 2023 Z51 70th Aniversario celebra con estilo y potencia. Equipado con un motor V8 potente, tracción trasera y tecnología avanzada, ofrece una experiencia de conducción emocionante. Su diseño aerodinámico y detalles exclusivos destacan su herencia deportiva y lujo moderno. Ideal para quienes buscan un deportivo icónico con un rendimiento excepcional, mega elegante y a la moda.",
        },
        {
            imgSrc: "img/bmw.jpeg",
            altText: "deluxe 2",
            model: "BMW M2 Coupe Competition 2024",
            price: "$1,300,000",
            year: 2024,
            mileage: "5,000 km",
            description: "El BMW M2 Coupe 2024 combina agilidad y refinamiento en un paquete compacto de alto rendimiento. Impulsado por un motor turbocharged que entrega una potencia impresionante a las ruedas traseras, ofrece una conducción dinámica y precisa. Su diseño deportivo se distingue por detalles M específicos, como la parrilla frontal más amplia y faldones aerodinámicos. En el interior, los materiales de alta calidad y la tecnología avanzada.",
        },
        {
            imgSrc: "img/mustang.jpeg",
            altText: "deluxe 3",
            model: "Ford Mustang Shelby GT500 2022",
            price: "$1,750,000",
            year: 2022,
            mileage: "5,000 km",
            description: "El Ford Mustang Shelby GT500 2022 es un ícono del poder americano. Equipado con un motor V8 sobrealimentado que produce más de 700 caballos de fuerza, ofrece una aceleración impresionante y un sonido inconfundible. Su diseño agresivo y aerodinámico, junto con tecnología avanzada y un interior deportivo, lo convierten en un automóvil deseado por los amantes de la velocidad y el estilo clásico.",
        },
        {
            imgSrc: "img/challenger.jpeg",
            altText: "deluxe 4",
            model: "Dodge Challenger SRT Hellcat 2019 Red Eye",
            price: "$1,770,000",
            year: 2019,
            mileage: "4,000 km",
            description: "El Dodge Challenger SRT Hellcat 2019 Red Eye es pura potencia y nostalgia. Con su motor V8 sobrealimentado que entrega más de 700 caballos de fuerza, proporciona una experiencia de conducción emocionante. Su diseño musculoso y características de alto rendimiento como la suspensión adaptativa y frenos Brembo lo hacen ideal para quienes buscan un muscle car con tecnología moderna y un estilo retro impresionante.",
        },
        {
            imgSrc: 'img/mustang2.jpg',
            altText: 'deluxe 5',
            model: 'Ford Mustang GT 2019 Prime V8',
            price: '$1,000,000',
            year: 2019,
            mileage: '10,000 km',
            description: 'El Mustang GT 2019 es un ícono moderno de potencia y estilo en el mundo de los automóviles deportivos. Equipado con un motor V8 de 5.0 litros que entrega una impresionante potencia, combina su robusta mecánica con un diseño aerodinámico y agresivo. Su interior fusiona tecnología avanzada con comodidad, ofreciendo asientos deportivos y un panel de instrumentos digital configurable; manteniendo la imagen Mustang.'
        }
    ];

    deluxeCars.forEach((car) => {
        const carCard = document.createElement("div");
        carCard.className = "car-card";

        const carImg = document.createElement("img");
        carImg.src = car.imgSrc;
        carImg.alt = car.altText;

        const carDetails = document.createElement("div");
        carDetails.className = "car-details";

        const carModel = document.createElement("h2");
        carModel.textContent = car.model;

        const carPrice = document.createElement("p");
        carPrice.textContent = `Precio: ${car.price}`;

        const carYear = document.createElement("p");
        carYear.textContent = `Año: ${car.year}`;

        const carMileage = document.createElement("p");
        carMileage.textContent = `Kilometraje: ${car.mileage}`;

        const carDescription = document.createElement("p");
        carDescription.textContent = `Descripción: ${car.description}`;

        const contactButton = document.createElement("button");
        contactButton.textContent = "Contactar";

        // Manejar el clic en el botón de contacto
        contactButton.addEventListener('click', () => {
            const telefono = '526444074487'; // Reemplaza con tu número de WhatsApp
            const mensaje = `¡Hola! Estoy interesado en obtener más información sobre ${car.model}.`;
            const whatsappLink = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
            window.open(whatsappLink, '_blank');
        });

        carDetails.appendChild(carModel);
        carDetails.appendChild(carPrice);
        carDetails.appendChild(carYear);
        carDetails.appendChild(carMileage);
        carDetails.appendChild(carDescription);
        carDetails.appendChild(contactButton);

        carCard.appendChild(carImg);
        carCard.appendChild(carDetails);

        carContainer.appendChild(carCard);
    });

    // Crear Footer
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.textContent = "© 2024 Equipo CODIGO 4AMPr";
    footer.appendChild(p);

    // Crear y actualizar Reloj dentro del footer
    function crearReloj() {
        const reloj = document.createElement("div");
        reloj.id = "reloj";
        footer.appendChild(reloj); // Añadir el reloj al footer

        function actualizarHora() {
            const ahora = new Date();
            const horas = agregarCero(ahora.getHours());
            const minutos = agregarCero(ahora.getMinutes());
            const segundos = agregarCero(ahora.getSeconds());
            reloj.textContent = `${horas}:${minutos}:${segundos}`;
        }

        function agregarCero(numero) {
            return numero < 10 ? "0" + numero : numero;
        }

        actualizarHora(); // Inicializa el reloj con la hora actual
        setInterval(actualizarHora, 1000); // Actualiza cada segundo
    }

    // Llamar a la función para crear el reloj
    crearReloj();

    // Añadir el footer al body después de añadir el reloj
    document.body.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", cargarContenido);