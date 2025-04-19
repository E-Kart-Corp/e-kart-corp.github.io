import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  CreditCard,
  Clock,
  Sparkles,
  ShieldCheck,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { IconDiscord, IconInsta, IconReddit, IconTwitter } from "./icon";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <ShoppingCart className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-blue-500">
                e-kart
              </span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Accueil
              </a>
              <a
                href="#fonctionnement"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Fonctionnement
              </a>
              <a
                href="#avantages"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Avantages
              </a>
              <a
                href="#beta"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Beta Test
              </a>
              <a
                href="#equipe"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Équipe
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="#beta"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500"
            >
              Tester la bêta
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Accueil
            </a>
            <a
              href="#fonctionnement"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Fonctionnement
            </a>
            <a
              href="#avantages"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Avantages
            </a>
            <a
              href="#beta"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Beta Test
            </a>
            <a
              href="#equipe"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Équipe
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Contact
            </a>
            <a
              href="#beta"
              className="block px-3 py-2 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md"
            >
              Tester la bêta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-500 to-blue-600 py-20 w-full"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Faites vos courses. Sortez. Sans passer par la caisse.
            </h1>
            <p className="text-xl text-white opacity-90 mb-8">
              e-kart révolutionne votre expérience shopping avec sa technologie
              de reconnaissance d'objets. Scannez, payez et partez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#beta"
                className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 shadow-lg"
              >
                Tester la bêta
              </a>
              <a
                href="#fonctionnement"
                className="inline-flex justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white "
              >
                Comment ça marche ?
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-96 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-6 bg-gray-100 flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
              </div>
              <div className="p-4 pt-10 flex flex-col items-center justify-center h-full">
                <ShoppingCart className="h-16 w-16 text-blue-500 mb-4" />
                <p className="text-center text-gray-800">
                  App e-kart en action
                </p>
                <p className="text-center text-gray-500 text-sm">
                  (Mockup de l'application)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Component
const HowItWorks = () => {
  return (
    <section id="fonctionnement" className="py-20 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça fonctionne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expérience d'achat fluide et intuitive en trois étapes simples
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
              <Search className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Scanner
            </h3>
            <p className="text-gray-600">
              Pointez simplement votre smartphone vers les produits. Notre
              technologie de reconnaissance d'objets identifie instantanément
              vos articles.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
              <ShoppingCart className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Panier automatique
            </h3>
            <p className="text-gray-600">
              Les articles sont automatiquement ajoutés à votre panier avec les
              prix et quantités corrects. Modifiez votre panier à tout moment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
              <CreditCard className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Paiement sans friction
            </h3>
            <p className="text-gray-600">
              Une fois vos courses terminées, validez votre panier et payez via
              l'application. Sortez du magasin sans passer par la caisse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits Component
const Benefits = () => {
  return (
    <section id="avantages" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir e-kart ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution qui transforme votre expérience d'achat quotidienne
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
              <Clock className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Gain de temps
            </h3>
            <p className="text-gray-600">
              Évitez les files d'attente et quittez le magasin instantanément
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
              <Sparkles className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Technologie innovante
            </h3>
            <p className="text-gray-600">
              Reconnaissance d'objets de pointe pour une identification précise
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
              <ShieldCheck className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Sécurité maximale
            </h3>
            <p className="text-gray-600">
              Transactions cryptées et protection des données personnelles
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Expérience fluide
            </h3>
            <p className="text-gray-600">
              Interface intuitive et parcours utilisateur optimisé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Partners Component
const Partners = () => {
  const partners = [
    {
      name: "EPITECH",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Epitech_Official_Logo.png",
    },
    /* {
      name: "FreshMarket",
      logo: "/api/placeholder/200/100",
    },
    {
      name: "HyperShop",
      logo: "/api/placeholder/200/100",
    }, */
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos partenaires
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ils nous font confiance pour transformer l'expérience d'achat
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center p-4"
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="max-h-16 max-w-full"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Intégrations disponibles avec les principaux systèmes de caisse et
            ERP
          </p>
        </div>
      </div>
    </section>
  );
};

const BetaTest = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://test-vercel-henna-kappa.vercel.app/api/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setMessage(data.message);
        setEmail("");
      } else {
        setIsSuccess(false);
        setMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="beta"
      className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 w-full"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rejoignez nos bêta-testeurs
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Soyez parmi les premiers à tester e-kart et contribuez à améliorer
            l'application
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 mb-2 sm:mb-0 sm:mr-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={isLoading}
                >
                  {isLoading ? "Envoi en cours..." : "Je veux tester"}
                </button>
              </div>
              {message && (
                <div
                  className={`p-3 rounded ${
                    isSuccess
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Component
const Team = () => {
  const teamMembers = [
    {
      name: "Brice HUET",
      role: "Chef de projet & Développeur Fullstack",
      bio: "Pilote du projet Ekart, impliqué dans tous les pôles : IA, mobile, API, et organisation technique. Garant de la vision produit et de la coordination d’équipe.",
      imageUrl: "https://avatars.githubusercontent.com/u/91674901?v=4",
    },
    {
      name: "Florian ETHEVE",
      role: "Ingénieur IA & Qualité",
      bio: "Responsable des algorithmes de reconnaissance IA, gestion des VM et des tests unitaires. Supervise la fiabilité du système de reconnaissance.",
      imageUrl: "https://avatars.githubusercontent.com/u/91674918?v=4",
    },
    {
      name: "Mael POMPILIUS",
      role: "Développeur Frontend & Communication",
      bio: "Travaille sur le front du back-office commerçant et contribue activement à la stratégie de communication du projet.",
      imageUrl: "https://avatars.githubusercontent.com/u/91674936?v=4",
    },
    {
      name: "Ethan GUILLOUX",
      role: "UX Designer & Frontend Commerce",
      bio: "Spécialisé dans l’interface utilisateur du site commerçant. Participe à la communication globale et à l’identité visuelle d'Ekart.",
      imageUrl: "https://avatars.githubusercontent.com/u/91675639?v=4",
    },
    {
      name: "Noémie MAILLOT",
      role: "Assistante IA & Test",
      bio: "Participe à l’implémentation et aux tests des modules IA, sous la supervision de Florian. Contribue à l’enrichissement de la base de données.",
      imageUrl: "https://avatars.githubusercontent.com/u/91674938?v=4",
    },
    {
      name: "Benjamin MAILLOT",
      role: "Reconnaissance Visuelle",
      bio: "Responsable de l'intégration de Yolo pour la reconnaissance de forme.",
      imageUrl: "https://avatars.githubusercontent.com/u/91675084?v=4",
    },
  ];

  return (
    <section id="equipe" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionnés par l'innovation et le shopping sans friction
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-80"
            >
              <div className="flex justify-center pt-8">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-40 w-40 rounded-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-500 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Component
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://test-vercel-henna-kappa.vercel.app/api/getmailnews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setMessage(data.message);
        setEmail("");
      } else {
        setIsSuccess(false);
        setMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-12 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Restez informé
          </h2>
          <p className="text-gray-600">
            Inscrivez-vous à notre newsletter pour suivre nos actualités et les
            nouvelles fonctionnalités
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="max-w-md mx-auto">
            <div className="sm:flex">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full px-4 py-3 mb-2 sm:mb-0 sm:mr-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                placeholder="Votre adresse email"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLoading ? "Envoi en cours..." : "S'abonner"}
              </button>
            </div>
          </div>
          {message && (
            <div
              className={`p-3 rounded ${
                isSuccess
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment e-kart protège-t-il mes données personnelles ?",
      answer:
        "e-kart respecte les normes RGPD et utilise un chiffrement de bout en bout pour toutes les données personnelles. Nous ne partageons aucune information avec des tiers sans votre consentement explicite.",
    },
    {
      question: "Quels appareils sont compatibles avec e-kart ?",
      answer:
        "e-kart est compatible avec les smartphones iOS 12+ et Android 8.0+ équipés d'une caméra. Pour une expérience optimale, nous recommandons un appareil avec au moins 3 Go de RAM.",
    },
    {
      question: "Comment fonctionne le système de reconnaissance d'objets ?",
      answer:
        "Notre technologie propriétaire utilise l'intelligence artificielle et le machine learning pour identifier les produits en fonction de leur forme, taille, couleur et autres caractéristiques visuelles. Le système s'améliore continuellement grâce aux données anonymisées collectées.",
    },
    {
      question: "Dans quels magasins puis-je utiliser e-kart ?",
      answer:
        "e-kart est actuellement disponible dans les enseignes partenaires listées sur notre site. Nous travaillons activement à l'expansion de notre réseau de partenaires pour couvrir plus de magasins.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Tout ce que vous devez savoir sur e-kart
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full bg-white px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <ShoppingCart className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">e-kart</span>
            </div>
            <p className="mt-4 text-gray-300">
              Transformez votre expérience de shopping avec notre technologie de
              reconnaissance d'objets.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#fonctionnement"
                  className="text-gray-300 hover:text-white"
                >
                  Fonctionnement
                </a>
              </li>
              <li>
                <a href="#avantages" className="text-gray-300 hover:text-white">
                  Avantages
                </a>
              </li>
              <li>
                <a href="#beta" className="text-gray-300 hover:text-white">
                  Beta Test
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">ekart.eip.contact@gmail.com</li>
              <li className="flex space-x-4 mt-4">
                <a
                  href="https://www.reddit.com/r/eKart/"
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  <IconReddit className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/ekart_eip"
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  <IconTwitter color="white" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/e.kart_eip/"
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  <IconInsta color="white" className="h-5 w-5" />
                </a>
                <a
                  href="https://discord.com/channels/1348281916419342336/1348289742961115217"
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  <IconDiscord color="white" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} e-kart. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Partners />
      <BetaTest />
      <Team />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
