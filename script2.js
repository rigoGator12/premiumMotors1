const paginadiv = document.getElementById("pagina2");

function cargarContenido() {
    
    // Crear Header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Pick-Up"; // Título para la sección de Pick-Up
    header.appendChild(h1);
    document.body.appendChild(header);

    // Crear Nav
    const nav = document.createElement("nav");
    const links = [
        { href: 'index.html', text: 'Pagina Principal' },
        { href: 'sedan.html', text: 'Sedan' },
        { href: 'suv.html', text: 'Suv' },
        { href: 'deluxe.html', text: 'Deluxe' },
    ];

    links.forEach(linkData => {
        const link = document.createElement("a");
        link.href = linkData.href;
        link.textContent = linkData.text;
        nav.appendChild(link);
    });

    document.body.appendChild(nav);

    // Crear Contenedor de Tarjetas de Pick-Up
    const carContainer = document.createElement('div');
    carContainer.id = 'car-container';
    document.body.appendChild(carContainer);

    const pickupCars = [
        {
            imgSrc: 'img/lobo.jpeg',
            altText: 'Pick-Up 1',
            model: 'Ford Lobo Tremor 2022',
            price: '$1,500,000',
            year: 2022,
            mileage: '15,000 km',
            description: 'La Ford Lobo Tremor 2022 es una robusta pick-up diseñada para desafiar terrenos difíciles con estilo y potencia. Equipada con un motor V8 de alta potencia y tracción en las cuatro ruedas, ofrece un rendimiento excepcional tanto en carretera como fuera de ella. Su diseño exterior imponente incluye detalles en negro satinado y rines de 18 pulgadas con neumáticos todo terreno para enfrentar cualquier desafío. En el interior, destaca por su confort con asientos en cuero y tecnología avanzada como pantalla táctil y sistema de sonido premium.'
        },
        {
            imgSrc: 'img/ranger.jpeg',
            altText: 'Pick-Up 2',
            model: 'Ford Ranger Raptor 2023',
            price: '$1,450,000',
            year: 2023,
            mileage: '5,000 km',
            description: 'La Ford Ranger Raptor 2023 es una pick-up diseñada para dominar cualquier terreno con estilo y potencia. Equipada con un motor potente y tracción en las cuatro ruedas, ofrece un rendimiento excepcional tanto en carretera como fuera de ella. Su diseño robusto incluye detalles deportivos y rines de aleación de alta resistencia con neumáticos todo terreno. En el interior, destaca por su confort con asientos deportivos y tecnología avanzada, ideal para aventuras todoterreno con capacidad de carga y remolque superiores en su clase.'
        },
        {
            imgSrc: 'img/raptor.jpeg',
            altText: 'Pick-Up 3',
            model: 'Tacoma TRD sport 2024 4x4',
            price: '$1,000,000',
            year: 2024,
            mileage: '5,000 km',
            description: 'La Tacoma TRD Sport 2024 4x4 combina la versatilidad de una pick-up con el espíritu deportivo de TRD. Equipada con un motor potente y tracción en las cuatro ruedas, ofrece un rendimiento robusto tanto en caminos pavimentados como off-road. Su diseño exterior se destaca por detalles deportivos y rines de aleación de alta resistencia. En el interior, ofrece confort con asientos deportivos y tecnología intuitiva, como pantalla táctil y sistema de sonido premium. Ideal para quienes buscan un vehículo con capacidad todo terreno y un estilo dinámico.'
        },
        {
            imgSrc: 'img/silverado.jpeg',
            altText: 'Pick-Up 4',
            model: 'Chevrolet Silverado 2021',
            price: '$1,100,000',
            year: 2021,
            mileage: '10,000 km',
            description: 'La Chevrolet Silverado 2021 es una pick-up robusta y confiable que combina potencia con confort. Equipada con diversas opciones de motorización, incluyendo V8, ofrece un rendimiento excepcional en cualquier tarea, desde remolque hasta conducción diaria. Su diseño exterior imponente incluye líneas musculosas y detalles funcionales como la caja de carga con múltiples opciones de configuración. En el interior, proporciona espacio generoso y tecnología moderna como pantalla táctil y conectividad avanzada. Perfecta para los que valoran la confianza de Chevrolet.'
        },
        {
            imgSrc: 'img/cheyenne.jpeg',
            altText: 'Pick-Up 5',
            model: 'Chevrolet Cheyenne 2018',
            price: '$1,100,000',
            year: 2018,
            mileage: '10,000 km',
            description: 'El Chevrolet Cheyenne 2018 Centennial es una edición especial que conmemora los 100 años de Chevrolet en el mercado de camionetas. Este modelo se distingue por su diseño robusto y características premium. Equipado con un potente motor V8 que proporciona un rendimiento excepcional tanto en carretera como en terrenos difíciles, el Cheyenne Centennial ofrece una combinación de potencia y confort; En términos de diseño exterior, destaca por detalles exclusivos como emblemas conmemorativos sobre la marca Chevrolet que garantiza siempre.'
        }
    ];

    pickupCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';

        const carImg = document.createElement('img');
        carImg.src = car.imgSrc;
        carImg.alt = car.altText;

        const carDetails = document.createElement('div');
        carDetails.className = 'car-details';

        const carModel = document.createElement('h2');
        carModel.textContent = car.model;

        const carPrice = document.createElement('p');
        carPrice.textContent = `Precio: ${car.price}`;

        const carYear = document.createElement('p');
        carYear.textContent = `Año: ${car.year}`;

        const carMileage = document.createElement('p');
        carMileage.textContent = `Kilometraje: ${car.mileage}`;

        const carDescription = document.createElement('p');
        carDescription.textContent = `Descripción: ${car.description}`;

        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contactar';

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

    document.body.appendChild(footer);
}

// Cargar el contenido cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarContenido);