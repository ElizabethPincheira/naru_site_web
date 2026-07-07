import maceta1 from '../../assets/img/maceta1.jpeg';  // ← Importas la imagen

const ImageCard = ()=> {
  return (
    
    <img
    src={maceta1}
    alt="ima_card"
    className="w-48 h-48 object-cover rounded-lg"
    />
  );
};

export default ImageCard

