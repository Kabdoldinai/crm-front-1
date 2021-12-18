import PageHead from '../components/PageHead/PageHead'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import TopHeader from "../components/TopHeader/TopHeader";
import '../styles/globals.css';
import RegisterCompany from "../components/RegisterCompany/RegisterCompany";

export default function MyApp() {
  return (
    <>
    <PageHead />
    <NavigationBar />
    <TopHeader />
    <RegisterCompany />
    </>
  )
}