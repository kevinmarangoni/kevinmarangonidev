import {ptBR} from '@data/data'
import Layout from '@components/layout/Layout'

const Home: React.FC = () => {
  const {personal} = ptBR

  return (
    <Layout>
      <article>
        <h2>Olá, meu nome é</h2>
        <h1>{personal.name}</h1>
        <h3>e eu sou <span>Desenvolvedor Fullstack</span></h3>
      </article>
    </Layout>
  )
}

export default Home