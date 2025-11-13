import banner_1_primavera from '../../assets/foto poster.png';
import Vela_Perfumada_Maça from '../../assets/vela maça.png';
import Vela_Perfumada_Abóbora from '../../assets/foto vela.png';
import Vela_Perfumada_Canela from '../../assets/vela canela.png';
import Vela_Perfumada_Marshmallow from '../../assets/vela marshmallow.png';
import './Produtos.css';
export default function Produtos() {

    return (
        <main>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner_1_primavera} className="d-block w-100" alt="..." />
                    </div>
                </div>

                <section className='cards'>
                    <h1 className="acessivel">produtos de Outono</h1>
                    <div className="titulo">
                        <span>Outono</span>
                        <hr />
                    </div>



                    <div className="card_produto">
                        <img src={Vela_Perfumada_Maça} alt="Uma vela com aroma de Maçã" />
                        <h2> Vela Perfumada Maça</h2>
                        <p> perfume doce e frutado que deixa o ambiente acolhedor. </p>
                        <span>R$ 89,00/kg.</span>
                    </div>


                    <div className="card_produto">
                        <img src={Vela_Perfumada_Abóbora} alt="Uma vela com aroma de Abóbora" />
                        <h2> Vela Perfumada Abóbora</h2>
                        <p>aroma quente e aconchegante com toque adocicado.</p>
                        <span>R$ 89,00/kg.</span>
                    </div>


                    <div className="card_produto">
                        <img src={Vela_Perfumada_Canela} alt="Uma vela com aroma de Canela" />
                        <h2> Vela Perfumada Canela</h2>
                        <p>fragrância intensa e acolhedora com notas especiadas.</p>
                        <span>R$ 89,00/kg.</span>
                    </div>


                    <div className="card_produto">
                        <img src={Vela_Perfumada_Marshmallow} alt="Uma vela com aroma de Marshmallow" />
                        <h2> Vela Perfumada Marshmallow</h2>
                        <p> toque suave e aconchegante que desperta conforto e leve doçura.</p>
                        <span>R$ 89,00/kg.</span>
                    </div>

                </section>
            </div>
        </main>


    )
}

