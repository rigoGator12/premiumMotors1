const paginadiv = document.getElementById("pagina4");

// Función para cargar todo el contenido de la página
function cargarContenido() {
    
    // Crear Header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "SUV";
    header.appendChild(h1);
    document.body.appendChild(header);

    // Crear Nav
    const nav = document.createElement("nav");
    const links = [
        { href: "index.html", text: "Pagina Principal" },
        { href: "pickup.html", text: "Pick-Up" },
        { href: "sedan.html", text: "Sedan" },
        { href: "deluxe.html", text: "Deluxe" },
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

    const suvCars = [
        {
            imgSrc: "img/siunna.jpeg",
            altText: "suv 1",
            model: "Toyota Sienna XSE Hybrid 2024",
            price: "$1,320,000",
            year: 2024,
            mileage: "5,000 km",
            description: "La Toyota Sienna XSE Hybrid 2024 es una minivan que combina eficiencia y tecnología para familias modernas. Equipada con un sistema híbrido que ofrece un excelente rendimiento de combustible, la Sienna XSE también destaca por su diseño espacioso que puede acomodar hasta ocho pasajeros con comodidad. El interior cuenta con una pantalla táctil de alta resolución, asientos versátiles y materiales de alta calidad. Ideal para aquellos que valoran la economía de combustible que nos ayuda a mejorar el rendimiento del combustible."
        },
        {
            imgSrc: "img/suburban.jpg",
            altText: "suv 2",
            model: "Chevrolet Suburban LTZ 2015",
            price: "$750,000",
            year: 2015,
            mileage: "5,000 km",
            description: "La Chevrolet Suburban LTZ 2015 es un SUV de tamaño completo conocido por su capacidad de llevar hasta nueve pasajeros con comodidad y lujo. Equipada con un potente motor V8, ofrece un rendimiento sólido tanto en carretera como fuera de ella. Su interior lujoso incluye cuero premium, sistema de entretenimiento, y tecnología avanzada que aseguran un viaje placentero para toda la familia. Con una amplia capacidad de carga y características de seguridad optimas, la Suburban LTZ 2015 es para la familia y para poder pasear con los amigos."
        },
        {
            imgSrc: "img/yukkon.jpeg",
            altText: "suv 3",
            model: "GMC Yukon Denali 2022 American",
            price: "$1,400,000",
            year: 2022,
            mileage: "5,000 km",
            description: "El GMC Yukon Denali 2022 representa el pináculo del lujo y el rendimiento en SUVs de tamaño completo. Con un motor potente y refinado, este vehículo ofrece una conducción suave y potente en cualquier terreno. El interior está diseñado con materiales de primera calidad y detalles artesanales, incluyendo asientos con ajuste eléctrico, calefacción y ventilación, y una pantalla táctil avanzada con sistema de sonido premium. Con capacidad para hasta ocho pasajeros y un diseño exterior imponente. Perfecta y imponente entre los familiares."
        },
        {
            imgSrc: "img/tahoe.jpeg",
            altText: "suv 4",
            model: "Chevrolet Tahoe RST 2021 Premier",
            price: "$1,300,000",
            year: 2021,
            mileage: "10,000 km",
            description: "El Chevrolet Tahoe RST 2021 es un SUV robusto y versátil que combina rendimiento y comodidad. Equipado con un motor potente y tracción en las cuatro ruedas, ofrece una conducción estable y segura en cualquier condición. El interior es espacioso y lujoso, con asientos cómodos para hasta nueve pasajeros y tecnología moderna como una pantalla táctil intuitiva y un sistema de sonido Bose premium. Ideal para familias activas que buscan espacio, rendimiento y tecnología en un vehículo todo terreno que pueda adaptarse a cualquier estilo de vida."
        },
        {
            imgSrc: "img/mercedes.jpeg",
            altText: "suv 5",
            model: "Mercedes-Benz GLE 53 AMG 2021",
            price: "$2,300,000",
            year: 2021,
            mileage: "10,000 km",
            description: "El Mercedes-Benz GLE 53 AMG 2021 es un SUV de alto rendimiento que combina lujo. Equipado con un motor electrificado de 6 cilindros en línea que produce 429 caballos de fuerza y está asociado a un sistema híbrido ligero EQ Boost, ofrece una aceleración impresionante. Su diseño exterior es elegante y aerodinámico, con detalles AMG distintivos como rines de aleación de gran tamaño y un escape deportivo. El Mercedes-Benz GLE 53 AMG 2021 redefine la experiencia de manejo de lujo con un equilibrio perfecto entre confort, deportividad y tecnologia."
        },
    ];

    suvCars.forEach((car) => {
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