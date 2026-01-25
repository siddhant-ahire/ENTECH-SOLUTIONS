// src/App.js
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MaintenanceModal from './components/MaintenanceModal';
import { useEffect, useState } from 'react';
import useWebsiteStore from './store/websiteStore';

const App = () => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
function convertWebsiteData(raw) {
  return {
    website_email: raw.website.website_email || "",
    website_logo: raw.website.website_logo || "",

    website_instagram: raw.website?.website_instagram || "",
    website_facebook: raw.website?.website_facebook || "",
    website_twitter: raw.website?.website_twitter || "",
    website_youtube: raw.website?.website_youtube || "",

    website_phone_number: raw.website?.website_phone_number || "",
    website_address: raw.website?.website_address || "",
    website_address_lat_long: raw.website?.website_address_lat_long || "",

    website_banner_title: raw.website?.website_banner_title || "",
    website_banner_pargraph:
      raw.website?.website_banner_pargraph || "",

    website_banner_button_text: "Get Started",

    website_banner_about_us_img:
      raw.website?.website_banner_about_us_img || "",

    website_banner_about_us_title:
      raw.website?.website_banner_about_us_title || "",

    website_banner_about_us_title2:
      raw.website?.website_banner_about_us_title2 || "",

    website_banner_about_us_pargraph:
      raw.website?.website_banner_about_us_pargraph || "",

    // ✅ banner images
    website_banner_images: (raw.bannerImages || [])
      .map(obj => Object.values(obj)[0])
      .filter(Boolean),

    // ✅ banner cards
    website_banner_cards: (raw.bannerCards || []),

    // ✅ main sections
    websiteServices: raw.services || [],
    websiteProjects: raw.projects || [],
    websiteClients: raw.clients || [],

    websiteAboutUs: raw.about || {},
    websiteFooter: raw.footer || {}
  };
}

  useEffect(() => {
    // get website data with api call
    const websiteAPI = async () => {
      try {
        /* =============================
          FETCH SINGLE SHEET
        ============================= */

        async function getSheet(sheetName) {
const url =
  `https://docs.google.com/spreadsheets/d/${process.env.REACT_APP_SPREADSHEET_ID}/gviz/tq?` +
  `sheet=${encodeURIComponent(sheetName)}` +
  `&headers=1` +
  `&tqx=out:json`;

          const res = await fetch(url);
          const text = await res.text();

          const json = JSON.parse(text.substring(47, text.length - 2));

          const cols = json.table.cols.map(c => c.label);
          const rows = json.table.rows;

          return rows.map(row => {
            const obj = {};
            row.c.forEach((cell, i) => {
              let value = cell?.v ?? "";

              // auto parse image arrays
              if (typeof value === "string" && value.trim().startsWith("[")) {
                try {
                  value = JSON.parse(value);
                } catch (e) {}
              }

              obj[cols[i]] = value;
            });
            return obj;
          });
        }

        /* =============================
          FETCH FULL WEBSITE DATA
        ============================= */

        async function getWebsiteData() {
          const [
            website,
            services,
            projects,
            clients,
            bannerImages,
            bannerCards,
            footer,
            about
          ] = await Promise.all([
            getSheet("Website"),
            getSheet("Services"),
            getSheet("Projects"),
            getSheet("Clients"),
            getSheet("Banner Images"),
            getSheet("Banner Cards"),
            getSheet("Footer"),
            getSheet("About Us")
          ]);

          return {
            website: website[0] || {},
            services,
            projects,
            clients,
            bannerImages,
            bannerCards,
            footer: footer[0] || {},
            about: about[0] || {}
          };
        }

        /* =============================
          EXAMPLE USAGE
        ============================= */

        getWebsiteData().then(data => {
          console.log("FULL WEBSITE DATA 👇");
          console.log(data);
          const convertedData = convertWebsiteData(data);
          console.log(convertedData);
          useWebsiteStore.setState({ website: convertedData });
          localStorage.setItem("website", JSON.stringify(data));
        });

        // const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/website`);
        // const data = await response.json();
        // useWebsiteStore.setState({ website: convertWebsiteData("CONVERTED", data) });
        // localStorage.setItem("websiteData", JSON.stringify(data?.data));
      } catch (error) {
        console.error('Error fetching website data:', error);
      }
    };
    // const cachedData = localStorage.getItem("websiteData");
    // if (cachedData) {
    //   useWebsiteStore.setState({ website: JSON.parse(cachedData) });
    // } else {
    websiteAPI();
    // }
    // return () => {
    //   localStorage.removeItem("websiteData");
    // };
  }, []);

  return (
    <div>
      <Header/>
      <main>
        <Outlet />
        <MaintenanceModal isOpen={isMaintenanceMode} setIsMaintenanceMode={setIsMaintenanceMode} />
        {/* Content rendered by the router will go here */}
      </main>
      <Footer/>
    </div>
  );
};

export default App;