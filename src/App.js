import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopping  from './pages/Shopping';
import Sell from './pages/Sell'
import Help from './pages/Help'
import Messages from './pages/Messages'
import SignIn from './pages/SignIn'
import HomePage from './pages/HomePage';
import BuildingConstructionMaterialEquip from './pages/buildingConstructionFullPage/BuildingMaterialConstruction'
import PipeFittings from './pages/buildingConstructionFullPage/PipeFittings';
import PipeFittingProductInfo from './pages/buildingConstructionFullPage/PipeFittingProductInfo';
import KelvinCompany from './pages/KelvinCompany';
import SellerBusinessPage from './pages/Seller Page/SellerBusinessDetail';
import SellerProductPage from './pages/Seller Page/SellerProductDetail';
import SellerAddressPage from './pages/Seller Page/SellerAddressDetail';
import SellerAddGst from './pages/Seller Page/SellerAddGst';
import SellerRegistrDone from './pages/Seller Page/SellerRegistrDone';
import Dashboard from './pages/Seller Page/Dashboard/DashboardHome';
import LeadManager from './pages/Seller Page/Dashboard/LeadManager';
import PremiumService from './pages/Seller Page/Dashboard/PremiumService';
import ProfilePage from './pages/Seller Page/Dashboard/ProfilePage';
import BuyLeadPge from './pages/Seller Page/Dashboard/BuyLead/BuyLeadPge';
import RecentLeadsPge from './pages/Seller Page/Dashboard/BuyLead/RecentLeadPg';
import ExportLeadsPge from './pages/Seller Page/Dashboard/BuyLead/ExportLeadPg';
import ProductLead from './pages/Seller Page/Dashboard/ProductLead';
import PhotosAndDocs from './pages/Seller Page/Dashboard/PhotosAndDocs';
import BuyerToolPge from './pages/Seller Page/Dashboard/BuyersTools';
import SettingPg from './pages/Seller Page/Dashboard/SettingPage';
import TellyOnWeb from './pages/Seller Page/Dashboard/TellyOnWeb';
import ShoppingProductDetails from './Components/ShoppingProductDetails';
import ShoppingStartSelling from './Components/ShoppingStartSelling';
import PaymentPg from './pages/PaymentPg';




function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/sell' element={<Sell />} />
          <Route path='/help' element={<Help />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/buildingConstructionFullPage' element={<BuildingConstructionMaterialEquip />} />
          <Route path='/pipe-fittings' element={<PipeFittings />} />
          <Route path='/Pipe-fittings/productdetail' element={<PipeFittingProductInfo />} />
          <Route path='/kelvin-pvt-ltd' element={<KelvinCompany />} />
          <Route path='/sellerBusiness' element={<SellerBusinessPage />} />
          <Route path='/sellerProduct' element={<SellerProductPage />} />
          <Route path='/sellerAddress' element={<SellerAddressPage />} />
          <Route path='/sellerAddGst' element={<SellerAddGst/>} />
          <Route path='/registrComplete' element={<SellerRegistrDone/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/message-center' element={<LeadManager/>} />
          <Route path='/premium-services' element={<PremiumService/>} />
          <Route path='/profile-page' element={<ProfilePage/>} />
          <Route path='/buylead-page' element={<BuyLeadPge/>} />
          <Route path='/recentlead-page' element={<RecentLeadsPge/>} />
          <Route path='/exportlead-page' element={<ExportLeadsPge/>} />
          <Route path='/productlead-page' element={<ProductLead/>} />
          <Route path='/photoanddocs-page' element={<PhotosAndDocs/>} />
          <Route path='/buyertool-page' element={<BuyerToolPge/>} />
          <Route path='/setting-page' element={<SettingPg/>} />
          <Route path='/tellyweb-page' element={<TellyOnWeb/>} />
          <Route path='/shopping/id' element={<ShoppingProductDetails/>} />
          <Route path='/shopping/sell-on-abaris' element={<ShoppingStartSelling/>} />
          <Route path='/payment-pg' element={<PaymentPg/>} />
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
