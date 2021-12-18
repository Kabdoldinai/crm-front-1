import PageHead from '../components/PageHead/PageHead'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import TopHeader from "../components/TopHeader/TopHeader";
import '../styles/globals.css';
import RegisterCompany from "../components/RegisterCompany/RegisterCompany";
import CEOpage from "../components/CEOpage/CEOpage";
import Requisites from "../components/Requisites/Requisites";
import Offices from "../components/Offices/Offices";

export default function MyApp() {
  return (
    <>
    <PageHead />
    <NavigationBar />
    <TopHeader />
    <RegisterCompany />
    <TopHeader />
    <CEOpage />
    <TopHeader />
    <Requisites />
    <TopHeader />
    <Offices />
    </>
  )
}