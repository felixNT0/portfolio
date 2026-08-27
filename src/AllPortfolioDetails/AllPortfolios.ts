import AutozardWebsite from "../assets/portfolio/Autozard-Website.png";
import Autozard from "../assets/portfolio/Autozard.png";
import callingApp from "../assets/portfolio/calling-app.png";
import contactlist from "../assets/portfolio/contactlist.png";
import farmeasy from "../assets/portfolio/farmeasy.png";
import fktCallsNew from "../assets/portfolio/fkt-calls.png";
import fktCryptoPulse from "../assets/portfolio/fkt-cryto-pulse.png";
import geek from "../assets/portfolio/geek.png";
import houseacq from "../assets/portfolio/houseacq.png";
import investyield from "../assets/portfolio/investyield.png";
import InvoiceHub from "../assets/portfolio/InvoiceHub.png";
import Junologix from "../assets/portfolio/Junologix.png";
import mapapp from "../assets/portfolio/mapapp.png";
import monsterindia from "../assets/portfolio/monsterindia.png";
import movieapp from "../assets/portfolio/movieapp.png";
import omdb from "../assets/portfolio/omdb.png";
import paperdaz from "../assets/portfolio/Paperdaz.png";
import paperdazLink from "../assets/portfolio/PaperLink.png";
import politicsthreadadmin from "../assets/portfolio/politicsthreaadmin.png";
import politicthread from "../assets/portfolio/politicsthread.png";
import risevest from "../assets/portfolio/risevest.png";
import sugarcosmetic from "../assets/portfolio/sugarcosmetic.png";
// New portfolio images
import studio187 from "../assets/portfolio/187studio.png";
import starnetacademy from "../assets/portfolio/academy.png";
import ariesGlobal from "../assets/portfolio/ariesglobal.png";
import billias from "../assets/portfolio/billias.png";
import damacPromotion from "../assets/portfolio/damacpromotions.png";
import danubeOffers from "../assets/portfolio/danube-offers.png";
import danube from "../assets/portfolio/danube.png";
import domainHunt from "../assets/portfolio/domainhunt.png";
import dxbFinance from "../assets/portfolio/dxbfinance.png";
import dxbStart from "../assets/portfolio/dxbstart.png";
import ellington from "../assets/portfolio/ellington.png";
import emaar from "../assets/portfolio/emaar.png";
import eriatswaSoko from "../assets/portfolio/eriatswa-soko.png";
import extensionAfrica from "../assets/portfolio/extensionafrica.png";
import farmexAgent from "../assets/portfolio/farmexagent.png";
import farmexVendor from "../assets/portfolio/farmexvendor.png";
import favour from "../assets/portfolio/favour.png";
import fktDocs from "../assets/portfolio/fkt-docs.png";
import fktECommerce from "../assets/portfolio/fkt-e-commerce.png";
import fktSolarhub from "../assets/portfolio/fkt-solarhub.png";
import idcKeppmanCoops from "../assets/portfolio/idckeppmancoops.png";
import joInnovationsLimited from "../assets/portfolio/joinnovationslimited.png";
import liqfinity from "../assets/portfolio/liqfinity.png";
import mbcLogix from "../assets/portfolio/mbclogix.png";
import mfc from "../assets/portfolio/mfc.png";
import mixr from "../assets/portfolio/mixr.png";
import newOfferDubai from "../assets/portfolio/newofferdubai.png";
import regis from "../assets/portfolio/regis.png";
import reportage from "../assets/portfolio/reportage.png";
import rezy from "../assets/portfolio/rezy.png";
import rhenari from "../assets/portfolio/rhenari.png";
import schoolSql from "../assets/portfolio/schoolsql.png";
import sobhaPromotion from "../assets/portfolio/sobhapromotion.png";
import starnetdms from "../assets/portfolio/starnetdms.png";
import starnettechrise from "../assets/portfolio/starnettechrise.png";
import syncteams from "../assets/portfolio/syncteams.png";
import teamAvailability from "../assets/portfolio/team-availablity.png";
import telegrambot from "../assets/portfolio/telegrambot.png";
import townhouse from "../assets/portfolio/townhouse.png";
import whalevault from "../assets/portfolio/whalevault.png";

export interface PortfolioItem {
  id: number;
  src: string;
  link?: string;
  appLink?: string;
  webAppLink?: string;
  name: string;
  disc: string;
  company: string;
  className?: string;
}

export const allPortfolios: PortfolioItem[] = [
  // Webloom Projects (Bangalore, India)
  {
    id: 1,
    src: dxbFinance,
    link: "https://www.dxbfi.com/",
    name: "DXB Finance",
    disc: "Dubai's premier real estate investment platform. Empowers investors with data-driven insights and comprehensive market analysis for informed decision-making.",
    company: "Webloom",
  },
  {
    id: 2,
    src: newOfferDubai,
    link: "https://www.newofferdubai.com/",
    name: "New Offer Dubai",
    disc: "A dynamic real estate platform showcasing the latest property offers and exclusive deals in Dubai. conecting buyers with prime opportunities.",
    company: "Webloom",
  },
  {
    id: 3,
    src: ariesGlobal,
    link: "https://www.areisglobal.com/",
    name: "Areis Global",
    disc: "A global real estate investment platform providing comprehensive property solutions and strategic market insights for international investors.",
    company: "Webloom",
  },
  {
    id: 4,
    src: dxbStart,
    link: "https://www.dxbstart.com/",
    name: "DXB Start",
    disc: "An ecosystem platform for Dubai startups, connecting entrepreneurs with essential resources, mentorship, and investment opportunities.",
    company: "Webloom",
  },
  {
    id: 5,
    src: studio187,
    link: "https://www.187.studio/",
    name: "187 Studio",
    disc: "An elite engineering talent platform. Connects global startups with top-tier developers in Bangalore for high-quality, cost-effective product building.",
    company: "Webloom",
  },
  {
    id: 6,
    src: sobhaPromotion,
    link: "https://www.sobhapromotions.com/",
    name: "Sobha Promotions",
    disc: "Exclusive promotional platform for Sobha Realty. Showcases luxury real estate developments and limited-time investment offers.",
    company: "Webloom",
  },
  {
    id: 7,
    src: damacPromotion,
    link: "https://www.damacpromotions.com/",
    name: "Damac Promotions",
    disc: "Digital showcase for Damac Properties, highlighting premium developments and latest real estate offers to prospective buyers.",
    company: "Webloom",
  },
  {
    id: 8,
    src: danube,
    link: "https://danubeproperties.com/",
    name: "Danube Properties",
    disc: "A comprehensive real estate portal for Danube Properties. Features detailed project showcases, virtual tours, and investment tools.",
    company: "Webloom",
  },
  {
    id: 9,
    src: domainHunt,
    link: "http://domain-hunt.vercel.app",
    name: "Domain Hunt",
    disc: "A streamlined domain discovery tool helping users search, analyze, and secure the perfect domain names for their brands.",
    company: "Webloom",
  },
  {
    id: 10,
    src: emaar,
    link: "https://www.emaar.com/",
    name: "Emaar Properties",
    disc: "The digital face of Emaar Properties, showcasing their portfolio of iconic luxury developments and lifestyle communities across Dubai.",
    company: "Webloom",
  },
  {
    id: 11,
    src: danubeOffers,
    link: "http://danubeoffers.com/",
    name: "Danube Offers",
    disc: "Dedicated platform for Danube Properties' special offers. aggregating exclusive deals and incentives for real estate investors.",
    company: "Webloom",
  },
  {
    id: 12,
    src: townhouse,
    link: "https://www.dubai-townhouse.com/",
    name: "Dubai Townhouse",
    disc: "Niche real estate platform specializing in townhouse properties in Dubai. Provides detailed listings and community insights.",
    company: "Webloom",
  },
  {
    id: 13,
    src: ellington,
    link: "https://ellingtonproperties.ae/en/property-for-sale/the-hillgate-dubai-silicon-oasis",
    name: "Ellington Properties",
    disc: "Luxury property showcase for Ellington's design-led developments. highlights premium living spaces like The Hillgate in Dubai Silicon Oasis.",
    company: "Webloom",
  },
  {
    id: 14,
    src: reportage,
    link: "https://www.reportagegroup.com/dubai-offer/",
    name: "Reportage Group",
    disc: "Investment portal for Reportage Group. Displays current property opportunities and market data for potential investors.",
    company: "Webloom",
  },
  {
    id: 15,
    src: rezy,
    link: "https://rezy.vercel.app/",
    name: "Rezy",
    disc: "A modern, high-performance real estate discovery platform built with Next.js. Offers a seamless property search experience.",
    company: "Webloom",
  },

  // Extension Africa Projects (Nigeria)
  {
    id: 16,
    src: extensionAfrica,
    link: "http://extensionafrica.com/",
    name: "Extension Africa",
    disc: "An agricultural technology platform connecting rural farmers to global supply chains. Provides comprehensive solutions to improve farm productivity and market access.",
    company: "Extension Africa",
  },
  {
    id: 17,
    src: farmexAgent,
    // link: "https://play.google.com/store/apps/details?id=com.afrifarmex.agent&hl=en&pli=1",
    appLink:
      "https://play.google.com/store/apps/details?id=com.afrifarmex.agent&hl=en&pli=1",
    name: "FarmEx Agent App",
    disc: "Mobile tool for FarmEx agents to manage farmer relationships and supply chain logistics. Built with React Native for offline-first capability.",
    company: "Extension Africa",
  },
  {
    id: 18,
    src: farmexVendor,
    // link: "https://play.google.com/store/apps/details?id=com.farmex.vendor",
    appLink: "https://play.google.com/store/apps/details?id=com.farmex.vendor",
    name: "FarmEx Vendor App",
    disc: "Vendor-facing application for the FarmEx ecosystem. Facilitates seamless order management and supply chain coordination.",
    company: "Extension Africa",
  },

  // SyncTeams Projects
  {
    id: 52,
    src: syncteams,
    link: "https://www.syncteams.studio/",
    name: "SyncTeams",
    disc: "Frontend Engineer. Designed and engineered the interactive drag-and-drop canvas for assembling and orchestrating complex AI agent teams. Managed state synchronization, streamlined client-side performance, and successfully revamped the platform's primary landing page.",
    company: "SyncTeams",
  },

  // Rhenari Projects
  {
    id: 53,
    src: rhenari,
    link: "https://www.rhenari.com/",
    name: "Rhenari",
    disc: "Frontend Engineer. Engineered the customer-facing client platform and analytics dashboard for this AI-powered team workflow and roadmap monitor. Integrated telemetry graphs compiling active signals from Slack, Jira, and GitHub directly with Microsoft Teams.",
    company: "Rhenari",
  },

  // Starnet Tech Projects (Nigeria)
  {
    id: 50,
    src: regis,
    link: "https://www.regisglobal.agency",
    name: "Regis",
    disc: "Premier hospitality solutions provider. Offers professional staff training, operational system design, and service staff supply across Nigeria.",
    company: "Starnet Tech",
  },
  {
    id: 51,
    src: mfc,
    link: "https://real-estate-taupe-one-69.vercel.app/",
    name: "MFC",
    disc: "Real estate marketplace facilitating the buying and selling of properties in Nigeria. Streamlines the property transaction process.",
    company: "Starnet Tech",
  },
  {
    id: 19,
    src: starnetacademy,
    link: "https://starnetacademy.com/",
    name: "Starnet Academy",
    disc: "Interactive e-learning platform. Features responsive design and real-time data synchronization to deliver a seamless educational experience.",
    company: "Starnet Tech",
  },
  {
    id: 20,
    src: telegrambot,
    link: "https://t.me/whalesvaultbot",
    name: "WhaleVault (Telegram Mini App)",
    disc: "Telegram Mini App bringing blockchain utilities to chat. enhancing user engagement with on-chain features directly within Telegram.",
    company: "Starnet Tech",
    className: "object-contain",
  },

  // Additional Starnet Tech Projects
  {
    id: 45,
    src: mbcLogix,
    link: "https://www.mbclogix.com/",
    name: "MBC Logistics",
    disc: "Corporate website for MBC Logistics. Showcases supply chain services and provides clear communication channels for clients.",
    company: "Starnet Tech",
  },
  {
    id: 46,
    src: whalevault,
    link: "https://whalevault.xyz/whitepaper",
    name: "WhaleVault Web",
    disc: "Official whitepaper website for WhaleVault. details the platform's vision, tokenomics, and development roadmap.",
    company: "Starnet Tech",
  },
  {
    id: 47,
    src: starnettechrise,
    link: "https://www.starnettechrise.com/",
    name: "Starnet Tech Rise",
    disc: "Event platform for TechRise 2.0. A major hackathon and summit for African innovators defining the future of technology.",
    company: "Starnet Tech",
  },
  {
    id: 48,
    src: starnetdms,
    link: "https://www.starnetdms.com/",
    name: "Starnet",
    disc: "Expert Web Design, Digital Marketing Agency | Starnetdms.comA next-gen agency with Progressive ideas for modern businesses",
    company: "Starnet Tech",
  },

  // Paperdaz Projects (California, US)
  {
    id: 21,
    src: paperdaz,
    link: "https://paperdaz.com/",
    name: "Paperdaz",
    disc: "Eco-friendly digital transformation platform. Replacing paper forms with digital solutions for efficient, paperless office management.",
    company: "Paperdaz",
  },
  {
    id: 22,
    src: Junologix,
    link: "https://junologix-test.vercel.app/",
    name: "Junologix",
    disc: "Platform for tax professionals. leverages modern technology to provide time-saving costs and efficient tax solutions.",
    company: "Paperdaz",
  },
  {
    id: 23,
    src: paperdazLink,
    link: "https://paperlink.app/",
    name: "Paperlink",
    disc: "Companion service to Paperdaz. Enables clients to complete and submit digital forms securely from anywhere, at any time.",
    company: "Paperdaz",
  },

  // STL Projects (Nigeria)
  {
    id: 24,
    src: schoolSql,
    link: "https://schoolsql.com/school",
    name: "School SQL",
    disc: "Comprehensive educational management system. Integration school administration, student data, and academic records into one platform.",
    company: "STL",
  },
  {
    id: 25,
    src: AutozardWebsite,
    link: "https://autozard.com/",
    name: "Autozard Website",
    disc: "Brand website for Autozard. promoting their AI-powered tools and services with a modern, responsive user interface.",
    company: "STL",
  },
  {
    id: 26,
    src: Autozard,
    link: "https://app.autozard.com/",
    name: "Autozard Web App",
    disc: "AI services platform. provides clients with easy access to a suite of artificial intelligence tools and applications.",
    company: "STL",
  },
  {
    id: 27,
    src: politicthread,
    link: "https://politicsthread.com/",
    name: "Politics Thread",
    disc: "Political discourse platform. enables users to express views and engage in meaningful political discussions.",
    company: "STL",
  },
  {
    id: 28,
    src: houseacq,
    link: "https://houseacq.com/",
    name: "House Acq",
    disc: "Property rental marketplace. connects landlords with tenants, allowing for listing vacancies and booking properties.",
    company: "STL",
  },
  {
    id: 29,
    src: politicsthreadadmin,
    link: "https://rpt.politicsthread.com/",
    name: "Politics Thread Admin Dashboard",
    disc: "Content moderation dashboard. empowers admins to review, approve, and manage user-generated content for Politics Thread.",
    company: "STL",
  },

  // Contract Projects
  {
    id: 88,
    src: idcKeppmanCoops,
    link: "https://idckeppmancoops.com",
    name: "IDC KEPPMAN MEMBER COOPERATIVE SOCIETY LTD",
    disc: "Empowering member farmers through collective efforts, modern farming practices, and global market access. A leading international agricultural cooperative producing Kenaf and other premium agro commodities.",
    company: "Contract",
  },
  {
    id: 89,
    src: joInnovationsLimited,
    link: "https://joinnovationsltd.com",
    name: "JO Innovations Limited",
    disc: "A Nigerian technology and innovation company based in Sokoto. Developing digital solutions, delivering AI programmes, creative services, training and capacity development to empower people, organisations and communities across Nigeria.",
    company: "Contract",
  },
  {
    id: 30,
    src: risevest,
    link: "https://risevest.com/",
    appLink: "https://play.google.com/store/apps/details?id=com.rise.mobile",
    name: "Risevest",
    disc: "A secure investment platform providing access to dollar-denominated assets in developed markets. Features intelligent algorithms and financial literacy tools to help users build wealth globally.",
    company: "Contract",
  },
  {
    id: 31,
    src: investyield,
    link: "https://www.investyield.ng/",
    appLink: "https://play.google.com/store/apps/details?id=com.investyield",
    name: "Invest Yield",
    disc: "A multi-currency investment application facilitating seamless transactions in Dollars, Naira, and other currencies. Available on both web and mobile platforms for diverse investor needs.",
    company: "Contract",
  },

  {
    id: 54,
    src: eriatswaSoko,
    link: "https://eriatswa-soko-global.vercel.app/",
    name: "Eriatswa Soko Global",
    disc: "A comprehensive inventory and sales management web application. empowers users to track stock levels, manage sales, and monitor team availability in real-time.",
    company: "Contract",
  },
  {
    id: 56,
    src: fktECommerce,
    link: "https://fkt-e-commerce.vercel.app/",
    name: "Fkt E-Commerce",
    disc: "An e-commerce platform designed for efficient inventory and sales management. Features tools for stock tracking and team collaboration to optimize retail operations.",
    company: "Contract",
  },
  {
    id: 32,
    src: billias,
    link: "https://billia.vercel.app/",
    name: "Billia",
    disc: "A modern billing and invoicing solution built with React and Next.js. Streamlines financial management for businesses with an intuitive and efficient interface.",
    company: "Contract",
  },
  {
    id: 34,
    src: mixr,
    link: "https://mixr360-software.vercel.app/",
    name: "Mixr360 Software",
    disc: "A suite of innovative software solutions tailored for diverse business requirements. Provides robust tools to enhance operational efficiency and productivity.",
    company: "Contract",
  },
  {
    id: 35,
    src: liqfinity,
    link: "https://liqfinity.kiloapps.com/",
    webAppLink: "https://app.liqfinity.com",
    name: "Liqfinity",
    disc: "A focused liquidity management platform for financial institutions and investors. Offers comprehensive solutions to optimize liquidity and financial performance.",
    company: "Contract",
  },
  {
    id: 33,
    src: InvoiceHub,
    link: "https://invoicehub.vercel.app/",
    name: "InvoiceHub",
    disc: "A payment and invoicing platform for business owners. Enables client profile management, transaction tracking, and real-time alerts for seamless financial control.",
    company: "Contract",
  },
  {
    id: 87,
    src: favour,
    link: "http://favourolorunfemi-va-portfolio.vercel.app/",
    name: "Favour VA Portfolio",
    disc: "A professional portfolio for a Virtual Assistant. Highlights expertise in executive support, administrative management, and business operations to attract potential clients.",
    company: "Contract",
  },

  // Legacy Projects
  {
    id: 92,
    src: fktSolarhub,
    link: "https://fkt-solarhub.vercel.app/",
    name: "FKT SolarHub - Solar Intelligence Platform",
    disc: "Premium solar calculations, weather intelligence, AI assistant, and learning resources.",
    company: "Legacy",
  },
  {
    id: 32,
    src: fktDocs,
    link: "https://fkt-docs.vercel.app/",
    name: "FKT Docs",
    disc: "A comprehensive document management system for healthcare providers. Enables secure storage, organization, and sharing of patient records with role-based access control.",
    company: "Legacy",
  },
  {
    id: 90,
    src: fktCryptoPulse,
    link: "https://fkt-crypto-pulse.vercel.app/market",
    name: "FKT CryptoPulse",
    disc: "Professional-grade crypto tracking and global currency exchange. Real-time data, glassmorphic design, and the best-in-class market insights.",
    company: "Legacy",
  },
  {
    id: 91,
    src: fktCallsNew,
    link: "https://fkt-calling-webapp.vercel.app/",
    name: "FKT Calls",
    disc: "Seamless, crystal-clear video and audio for your professional and personal meetings.",
    company: "Legacy",
  },
  {
    id: 53,
    src: teamAvailability,
    link: "https://team-availability-dashboard.vercel.app/",
    name: "Team Availability",
    disc: "Team Availability is a web application that helps teams manage their availability and schedule meetings. It allows users to create and manage their availability, and view the availability of other team members.",
    company: "Legacy",
  },
  {
    id: 36,
    src: callingApp,
    link: "https://fkt-calling-app.vercel.app/",
    name: "Video Calling",
    disc: "Remote video meeting platform enabling global communication and collaboration through high-quality video calls.",
    company: "Legacy",
  },

  {
    id: 37,
    src: contactlist,
    link: "https://fkt-connectsphere.vercel.app/",
    name: "Contact List, Graph and Map App",
    disc: "Comprehensive contact management application with COVID-19 data visualization through graphs and interactive maps.",
    company: "Legacy",
  },
  {
    id: 38,
    src: movieapp,
    link: "https://mymovieapp-six.vercel.app/",
    name: "Movie Website",
    disc: "Entertainment platform for searching and discovering movies and TV series with comprehensive content library.",
    company: "Legacy",
  },
  {
    id: 39,
    src: mapapp,
    link: "https://yoke-marketing-nigeria.vercel.app/",
    name: "Map Website",
    disc: "Interactive mapping application showing current location, country navigation, and global search functionality.",
    company: "Legacy",
  },
  {
    id: 40,
    src: farmeasy,
    link: "https://ephemeral-visheshsingh-farmeasy.netlify.app/",
    name: "FarmEasy Clone",
    disc: "Healthcare e-commerce platform clone for searching medicines and healthcare products with user-friendly interface.",
    company: "Legacy",
  },
  {
    id: 41,
    src: sugarcosmetic,
    link: "https://melodic-malabi-d69a87.netlify.app/",
    name: "Sugarcosmetic Clone",
    disc: "Beauty products e-commerce platform clone offering makeup kits, powders, brushes, and cosmetic accessories.",
    company: "Legacy",
  },
  {
    id: 42,
    src: omdb,
    link: "https://singhvishesh9484.github.io/Asynchronus-movie-app/",
    name: "Hotstar Mini",
    disc: "Streaming platform mini-clone featuring movie listings with rating-based sorting and content discovery.",
    company: "Legacy",
  },
  {
    id: 43,
    src: geek,
    link: "https://benevolent-fudge-ac5ed4.netlify.app/",
    name: "Geekbuying Clone",
    disc: "Electronics e-commerce platform clone showcasing various electrical items and gadgets for tech enthusiasts.",
    company: "Legacy",
  },
  {
    id: 44,
    src: monsterindia,
    link: "https://monster-india-clone.netlify.app/",
    name: "Monster India Clone",
    disc: "Job search platform clone enabling users to search and discover employment opportunities across India.",
    company: "Legacy",
  },
];
