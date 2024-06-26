const paginadiv = document.getElementById("pagina3");

function cargarContenido() {
    
    // Crear Header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Sedan"; // Cambia el título según sea necesario
    header.appendChild(h1);
    document.body.appendChild(header);

    // Crear Nav
    const nav = document.createElement("nav");
    const links = [
        { href: "index.html", text: "Pagina Principal" },
        { href: "pickup.html", text: "Pick-Up" },
        { href: "suv.html", text: "Suv" },
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

    const sedanCars = [
        {
            imgSrc: "img/civic.jpeg",
            altText: "sedan 1",
            model: "Honda Civic Touring 2022",
            price: "$600,000",
            year: 2022,
            mileage: "25,000 km",
            description: "El Honda Civic Touring 2022 combina diseño aerodinámico con tecnología avanzada. Equipado con pantalla táctil, cámara de reversa y frontal. Detalles exteriores en cromo y llantas de aleación. Faros LED y techo solar panorámico. Interior lujoso con sistema de audio premium y asientos de cuero perforado. Motor potente y eficiente para una conducción suave y silenciosa. Ideal para quienes buscan estilo, confort y rendimiento en un automóvil compacto.",
        },
        {
            imgSrc: "img/audi.jpeg",
            altText: "sedan 2",
            model: "Audi RS Q8 2023",
            price: "$3,500,000",
            year: 2023,
            mileage: "5,000 km",
            description:"El Audi RS Q8 2023 ofrece un diseño imponente y prestaciones de alto rendimiento. Equipado con tecnología avanzada como pantalla táctil, sistema de sonido premium y asientos deportivos de cuero. Incorpora detalles exteriores en aluminio y fibra de carbono para un estilo deportivo y elegante. Potenciado por un motor V8 biturbo, transmisión automática y tracción integral quattro, asegura una experiencia de conducción dinámica y emocionante.",
        },
        {
            imgSrc: "img/jetta.jpeg",
            altText: "sedan 3",
            model: "Jetta Highline 2019",
            price: "$400,000",
            year: 2019,
            mileage: "5,000 km",
            description: "El Jetta Highline 2019 combina elegancia y tecnología avanzada. Equipado con pantalla táctil, cámara de reversa, y detalles exteriores en aluminio y cromo. Sus faros LED y rines de aleación destacan su estilo moderno. En el interior, ofrece confort con aire acondicionado dual y asientos de cuero premium. Con un motor potente y eficiente, es ideal para disfrutar de un manejo excepcional, economico y uso muy seguro.",
        },
        {
            imgSrc: "img/camry.jpeg",
            altText: "sedan 4",
            model: "Toyota Camry LE 2023",
            price: "$620,000",
            year: 2023,
            mileage: "4,000 km",
            description: "El Toyota Camry LE 2023 es sinónimo de confiabilidad y confort. Con un diseño elegante y aerodinámico, ofrece tecnología intuitiva como pantalla táctil y cámara de reversa. Su interior espacioso incluye asientos cómodos en tela y un sistema de audio de alta calidad. Impulsado por un motor eficiente y confiable, el Camry LE proporciona una conducción suave y económica, ideal para quienes valoran la comodidad y la eficiencia en un sedán de clase media.",
        },
        {
            imgSrc: "img/nissan.jpeg",
            altText: "sedan 5",
            model: "Nissan Versa Sense 2024",
            price: "$450,000",
            year: 2024,
            mileage: "4,000 km",
            description: "El Nissan Versa Sense 2024 es un sedán compacto que combina estilo contemporáneo con eficiencia y tecnología accesible. Con un diseño aerodinámico y líneas fluidas, ofrece un espacio interior cómodo para cinco pasajeros, destacándose por su sistema de infoentretenimiento con pantalla táctil y conectividad Bluetooth. Equipado con un motor eficiente que proporciona un equilibrio entre rendimiento y economía de combustible.",
        },
    ];

    sedanCars.forEach((car) => {
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

// Cargar el contenido cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", cargarContenido);