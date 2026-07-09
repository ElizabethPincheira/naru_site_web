

const Footer = () => {
    return (
        <footer className="bg-surface-container-low border-t border-outline-variant/30 mt-section-gap">
<div className="flex flex-col md:flex-row justify-between items-start w-full px-margin-desktop py-12 gap-8 max-w-container-max mx-auto">
<div className="space-y-4 max-w-xs">
<div className="font-headline-md text-headline-md text-secondary tracking-tight">Macetas Artesanales</div>
<p className="text-secondary font-body-md text-body-md opacity-80">Objetos de diseño creados con consciencia y amor por lo hecho a mano. Transformando espacios urbanos.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div className="space-y-4">
<h4 className="font-label-md text-label-md text-primary uppercase">Navegación</h4>
<ul className="space-y-2 text-secondary font-body-md text-body-md">
<li><a className="hover:text-primary transition-colors" href="#">Home</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Catálogo</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Cuidados</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="font-label-md text-label-md text-primary uppercase">Redes Sociales</h4>
<ul className="space-y-2 text-secondary font-body-md text-body-md">
<li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Facebook</a></li>
<li><a className="hover:text-primary transition-colors" href="#">WhatsApp</a></li>
</ul>
</div>
</div>
</div>
<div className="px-margin-desktop py-6 border-t border-outline-variant/10 text-center text-secondary font-label-md text-label-md opacity-60">
            © 2024 Macetas Artesanales. Handcrafted with care.
        </div>
</footer>

        

    )
}

export default Footer