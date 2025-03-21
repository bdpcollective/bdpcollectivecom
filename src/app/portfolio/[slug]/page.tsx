import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface ContentSection {
  text: string | string[];
  image: string;
}

interface PortfolioContent {
  projectDescription: ContentSection;
  userResearch: ContentSection;
  workflows: ContentSection;
  informationArchitecture: ContentSection;
  wireframeMockups: ContentSection;
  highFidelityMockups: ContentSection;
}

interface PortfolioItem {
  title: string;
  description: string;
  logo: string;
  slug: string;
  heroImage: string;
  content: PortfolioContent;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Health Journaling App",
    description: "The HealthComms mobile app prototype was designed to support cancer patients in tracking symptoms throughout treatment, based on the idea that detailed symptom tracking could improve patient care. ",
    logo: "/logos/healthcomms-logo.png",
    slug: "healthcomms",
    heroImage: "/portfolio/healthcomms-hero.jpg",
    content: {
      projectDescription: {
        text: [
          "The HealthComms mobile app prototype was designed to support cancer patients in tracking symptoms throughout treatment, based on the idea that detailed symptom tracking could improve patient care.",
          "To achieve this, I began by defining the project scope and gathering insights through interviews with doctors, patients, and stakeholders, which helped shape a patient-centered journey map and information architecture.",
          "Using wireframes and high-fidelity mockups, I created a clear and intuitive interface to guide patients in documenting symptoms easily. The result was a prototype that enhanced communication, offering doctors accurate, timely insights to improve the quality of patient care."
        ],
        image: "/portfolio/healthcomms/123_HealthComms.png"
      },
      userResearch: {
        text: [
          "Our research involved interviews with cancer patients, caregivers, and healthcare providers. Key findings revealed that patients often struggle to accurately recall and communicate their symptoms during medical appointments, leading to potential gaps in care.",
          "We identified several key pain points in the current symptom tracking process, including difficulty in remembering symptoms between appointments, lack of standardized tracking methods, and limited communication channels with healthcare providers."
        ],
        image: "/portfolio/healthcomms/4_HealthCommsProjectBrief.png"
      },
      workflows: {
        text: "",
        image: ""
      },
      informationArchitecture: {
        text: [
          "We diagramed a simple information architecture diagram to create a smooth, intuitive experience in the HealthComms app.",
          "Organizing content logically helped patients quickly log symptoms and communicate with their care team, minimizing frustration and ensuring easy navigation.",
          "This clear hierarchy made the app an effective, user-friendly tool that supported patients throughout their treatment journey."
        ],
        image: "/portfolio/healthcomms/4_Information Architecture - Doctor Patient.png"
      },
      wireframeMockups: {
        text: [
          "Initial wireframes focused on creating a simple, clear interface for daily symptom logging. We prioritized quick entry and easy navigation between different tracking categories.",
          "The wireframes helped us validate the information architecture and user flows before moving to high-fidelity designs."
        ],
        image: "/portfolio/healthcomms/wireframes.jpg"
      },
      highFidelityMockups: {
        text: [
          "The final design incorporates a clean, medical-appropriate color scheme and clear typography hierarchy. We added micro-interactions to make the tracking experience more engaging while maintaining professionalism.",
          "The high-fidelity mockups were refined through multiple iterations of user testing and feedback."
        ],
        image: "/portfolio/healthcomms/high-fidelity.jpg"
      }
    }
  },
  {
    title: "Vendor Portal",
    description: "NFM's Vendor Portal was a resource hub, but it needed a clearer path for vendors and more control for the internal team managing it.",
    logo: "/logos/nfm-logo.png",
    slug: "nfm",
    heroImage: "/portfolio/nfm/1_vendortools.png",
    content: {
      projectDescription: {
        text: [
          "The NFM Vendor Portal redesign focused on creating a more efficient and user-friendly platform for vendors to access resources and manage their relationship with NFM.",
          "My work on the redesign began by rethinking the content structure, organizing resources by what vendors used most often. With a new, intuitive information architecture, I then crafted a modern, accessible interface to simplify navigation.",
          "Now, vendors can effortlessly find what they need, while internal admins can independently manage content, ensuring a continually relevant portal without developer support."
        ],
        image: "/portfolio/nfm/1_vendortools.png"
      },
      userResearch: {
        text: [
          "To understand the portal's challenges, I conducted research with vendors and internal admins, identifying pain points around navigation and content management. ",
          "Vendors struggled to locate essential resources, while admins faced workflow inefficiencies due to reliance on developers for updates.",
          "Business goals centered on improving vendor engagement and reducing maintenance overhead, while technology constraints required a solution that worked within existing infrastructure."
        ],
        image: "/portfolio/nfm/2_Interview.png"
      },
      workflows: {
        text: "",
        image: ""
      },
      informationArchitecture: {
        text: [
          "Redefining the portal's structure was crucial to improving usability.",
          "I conducted a content inventory and reorganized resources based on vendor needs, prioritizing frequently accessed materials.",
          "The new information architecture introduced clear categorization and a logical hierarchy, making it easier for vendors to navigate while streamlining content updates for admins."
        ],
        image: "/portfolio/nfm/3_IA.png"
      },
      wireframeMockups: {
        text: [
          "With the new architecture in place, I translated the structure into wireframes, focusing on clarity and usability.",
          "Low-fidelity wireframes mapped out key interactions, ensuring a seamless vendor experience.",
          "Feedback from stakeholders helped refine layouts, emphasizing quick access to resources and an intuitive admin dashboard."
        ],
        image: "/portfolio/nfm/4a_VendorToolsWF.png"
      },
      highFidelityMockups: {
        text: [
          "The final high-fidelity designs brought the wireframes to life with a clean, modern UI that matched NFM's style guide.",
          "I applied accessible design principles, ensuring readability and ease of use across devices.",
          "Vendors now experience a visually streamlined portal, while admins benefit from an intuitive content management system, eliminating previous bottlenecks."
        ],
        image: "/portfolio/nfm/5_VendorTools.png"
      }
    }
  },
  {
    title: "Streamlining Product Messaging",
    description: "Designed a messaging management system for Best Buy that tied marketing and promotional content directly to product SKUs, ensuring consistent and efficient communication across channels.",
    logo: "/logos/bestbuy-logo.png",
    slug: "bestbuy",
    heroImage: "/portfolio/bestbuy-hero.jpg",
    content: {
      projectDescription: {
        text: "Designed a messaging management system to help Best Buy streamline marketing and promotional communications tied directly to product SKUs. This ensured consistent messaging across channels and faster deployment of promotions.",
        image: "/portfolio/bestbuy/1a_BestBuy_Promotion.png"
      },
      userResearch: {
        text: "Conducted stakeholder interviews with marketing teams to understand communication bottlenecks. Researched how SKU-specific messaging impacted customer engagement and streamlined content distribution.",
        image: "/portfolio/bestbuy/2a_BestBuy_Interviews.png"
      },
      workflows: {
        text: "Mapped workflows for account managers to create, map channels, get approval, and publish product messages efficiently and independently. Improvement from their old process of sharing a spreadsheet and having a senior manager approve or reject.",
        image: "/portfolio/bestbuy/3a_bestbuy_workflow.png"
      },
      informationArchitecture: {
        text: "Structured the platform to organize messaging by product SKU, ensuring easy access for marketing teams and reducing redundant content creation.",
        image: "/portfolio/bestbuy/4a_bestbuy_ia.png"
      },
      wireframeMockups: {
        text: "Created low-fidelity wireframes to visualize content flows and validate communication paths. Focused on improving content creation speed and message clarity.",
        image: "/portfolio/bestbuy/wireframes.jpg"
      },
      highFidelityMockups: {
        text: "Developed high-fidelity mockups with intuitive layouts, ensuring marketing teams could easily create and publish SKU-tied messaging. Improved overall efficiency and content consistency.",
        image: "/portfolio/bestbuy/6a_BestBuy_HighFidelity.png"
      }
    }
  },
  {
    title: "Inventory Management System",
    description: "Preventing Premature Sales",
    logo: "/logos/gap-logo.png",
    slug: "gap",
    heroImage: "/portfolio/gap-hero.jpg",
    content: {
      projectDescription: {
        text: "Redesigned an inventory management system for Gap, allowing users to hold product sales until all SKUs were delivered to every store. This prevented premature sales and long-distance shipping costs.",
        image: "/portfolio/gap/1a_gap_inventorymanagement.png"
      },
      userResearch: {
        text: "User research was already completed by the time we started this project. We reviewed the findings with the project manager and moved forward with the prototype.",
        image: ""
      },
      workflows: {
        text: "User research had been done before we started the project. We went over the research with the Project Manager before we started the project. Developed a workflow for holding products in the system until all stores received full inventory. This minimized shipping costs and allowed shipping from stores closest to customers.",
        image: "/portfolio/gap/2a_gap_workflow.png"
      },
      informationArchitecture: {
        text: "The system architecture was organized around key retail operations: inventory tracking, order management, and reporting.",
        image: "/portfolio/gap/ia.jpg"
      },
      wireframeMockups: {
        text: "Designed wireframes showing hold dates and hold expirations, the product hold and release flows, and focusing on reducing complexity for users managing inventory across stores.",
        image: "/portfolio/gap/3a_gap_wireframes.png"
      },
      highFidelityMockups: {
        text: "Delivered a high-fidelity prototype with clear hold dates and hold expirations, actionable filters, and with a intuitive table they were familiar with. Improved product inventory delevery when needed and reduced shipping costs.",
        image: "/portfolio/gap/4a_gap_high-fidelity.png"
      }
    }
  },
  {
    title: "Giving Donors a Better Experience",
    description: "Giving Hearts Day had a problem with a clunky search and checkout proccess",
    logo: "/logos/dmf-logo.png",
    slug: "dakota-medical-foundation",
    heroImage: "/portfolio/dmf-hero.jpg",
    content: {
      projectDescription: {
        text: "A modern auction platform designed to facilitate online fundraising events for medical research and community health initiatives.",
        image: "/portfolio/dmf/1a_dmf_Charity.png"
      },
      userResearch: {
        text: "Research focused on understanding donor behavior and event organizer needs to create an engaging auction experience.",
        image: "/portfolio/dmf/2a_dmf_interviews.png"
      },
      workflows: {
        text: "The auction workflows were designed to handle bidding, payment processing, and event management efficiently.",
        image: "/portfolio/dmf/3a_dmf_workflow.png"
      },
      informationArchitecture: {
        text: "The platform was organized around key auction features: item browsing, bidding, and event management.",
        image: "/portfolio/dmf/4a_dmf_ia.png"
      },
      wireframeMockups: {
        text: "Wireframes emphasized clear item presentation and intuitive bidding controls.",
        image: "/portfolio/dmf/wireframes.jpg"
      },
      highFidelityMockups: {
        text: "Final designs incorporated engaging visuals and real-time updates to create an exciting auction experience.",
        image: "/portfolio/dmf/high-fidelity.jpg"
      }
    }
  }
];

export default function PortfolioItem({ params }: { params: { slug: string } }) {
  const currentIndex = portfolioItems.findIndex(item => item.slug === params.slug);
  const item = portfolioItems[currentIndex];
  
  if (!item) {
    notFound();
  }

  // Circular navigation
  const prevItem = currentIndex > 0 
    ? portfolioItems[currentIndex - 1] 
    : portfolioItems[portfolioItems.length - 1];
  const nextItem = currentIndex < portfolioItems.length - 1 
    ? portfolioItems[currentIndex + 1] 
    : portfolioItems[0];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[65vh] bg-[oklch(0.216_0.006_56.043)]">
        {/* Navigation Chevrons */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-20">
          <Link 
            href={`/portfolio/${prevItem.slug}`}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label={`Previous project: ${prevItem.title}`}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </Link>
          <Link 
            href={`/portfolio/${nextItem.slug}`}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label={`Next project: ${nextItem.title}`}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <div className="w-48 h-48 flex items-center justify-center mb-4 mx-auto">
              <Image
                src={item.logo}
                alt={`${item.title} logo`}
                width={192}
                height={192}
                className="object-contain"
                priority
                quality={75}
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {item.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {item.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Project Description */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Project Description</h2>
            <div className="prose max-w-none mb-8">
              {Array.isArray(item.content.projectDescription.text) ? (
                item.content.projectDescription.text.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))
              ) : (
                <p>{item.content.projectDescription.text}</p>
              )}
            </div>
            {item.slug === "healthcomms" ? (
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/1_HealthComms-Splash.png"
                    alt="Project description 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/2_HealthComms-Home.png"
                    alt="Project description 2"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/3_HealthComms-JournalEntries.png"
                    alt="Project description 3"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.content.projectDescription.image}
                  alt="Project description"
                  width={800}
                  height={600}
                  className="object-contain"
                  quality={75}
                />
              </div>
            )}
          </div>

          {/* User Research */}
          {item.slug !== "gap" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">User Research</h2>
              <div className="prose max-w-none mb-8">
                {Array.isArray(item.content.userResearch.text) ? (
                  item.content.userResearch.text.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))
                ) : (
                  <p>{item.content.userResearch.text}</p>
                )}
              </div>
              {item.content.userResearch.image && (
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={item.content.userResearch.image}
                    alt="User research"
                    width={800}
                    height={600}
                    className="object-contain"
                    quality={75}
                  />
                </div>
              )}
            </div>
          )}

          {/* Workflows */}
          {item.content.workflows.text && item.content.workflows.text !== "" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Workflows</h2>
              <div className="prose max-w-none mb-8">
                {Array.isArray(item.content.workflows.text) ? (
                  item.content.workflows.text.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))
                ) : (
                  <p>{item.content.workflows.text}</p>
                )}
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.content.workflows.image}
                  alt="Workflows"
                  width={800}
                  height={600}
                  className="object-contain"
                  quality={75}
                />
              </div>
            </div>
          )}

          {/* Information Architecture */}
          {item.slug !== "gap" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Information Architecture</h2>
              <div className="prose max-w-none mb-8">
                {Array.isArray(item.content.informationArchitecture.text) ? (
                  item.content.informationArchitecture.text.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))
                ) : (
                  <p>{item.content.informationArchitecture.text}</p>
                )}
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.content.informationArchitecture.image}
                  alt="Information architecture"
                  width={800}
                  height={600}
                  className="object-contain"
                  quality={75}
                />
              </div>
            </div>
          )}

          {/* Wireframe Mockups */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Wireframe Mockups</h2>
            <div className="prose max-w-none mb-8">
              {Array.isArray(item.content.wireframeMockups.text) ? (
                item.content.wireframeMockups.text.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))
              ) : (
                <p>{item.content.wireframeMockups.text}</p>
              )}
            </div>
            {item.slug === "healthcomms" ? (
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/8_1-Wireframes.png"
                    alt="Login Wireframe"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/8_2-Wireframes.png"
                    alt="Wireframe mockup 2"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/8_3-Wireframes.png"
                    alt="Wireframe mockup 3"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/8_4-Wireframes.png"
                    alt="Wireframe mockup 4"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/8_5-Wireframes.png"
                    alt="Wireframe mockup 5"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/8_6-Wireframes.png"
                    alt="Wireframe mockup 6"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            ) : item.slug === "nfm" ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/nfm/4a_VendorToolsWF.png"
                    alt="Vendor Tools Wireframe"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/nfm/4b_GuidesWF.png"
                    alt="Guides Wireframe"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/nfm/4c_UpdatesWF.png"
                    alt="Updates Wireframe"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/nfm/4d_individualUpdate.png"
                    alt="Individual Update Wireframe"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            ) : item.slug === "bestbuy" ? (
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/bestbuy/5a_bestbuy_wireframes.png"
                    alt="Best Buy Wireframe 1"
                    width={800}
                    height={600}
                    className="object-contain"
                    quality={75}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/bestbuy/5b_bestbuy_wireframes.png"
                    alt="Best Buy Wireframe 2"
                    width={800}
                    height={600}
                    className="object-contain"
                    quality={75}
                  />
                </div>
              </div>
            ) : item.slug === "dakota-medical-foundation" ? (
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Search and Filter Interface</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/portfolio/dmf/5a_dmf_wireframe.png"
                      alt="DMF Wireframe 1"
                      width={800}
                      height={600}
                      className="object-contain"
                      quality={75}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Checkout Process</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/portfolio/dmf/5b_dmf_wireframe.png"
                      alt="DMF Wireframe 2"
                      width={800}
                      height={600}
                      className="object-contain"
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.content.wireframeMockups.image}
                  alt="Wireframe mockups"
                  width={800}
                  height={600}
                  className="object-contain"
                  quality={75}
                />
              </div>
            )}
          </div>

          {/* High-Fidelity Mockups */}
          <div>
            <h2 className="text-3xl font-bold mb-6">High-Fidelity Mockups</h2>
            <div className="prose max-w-none mb-8">
              {Array.isArray(item.content.highFidelityMockups.text) ? (
                item.content.highFidelityMockups.text.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))
              ) : (
                <p>{item.content.highFidelityMockups.text}</p>
              )}
            </div>
            {item.slug === "healthcomms" ? (
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/9_1highfidelity.png"
                    alt="High-fidelity mockup 1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/9_2highfidelity.png"
                    alt="High-fidelity mockup 2"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/9_3highfidelity.png"
                    alt="High-fidelity mockup 3"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/9_4highfidelity.png"
                    alt="High-fidelity mockup 4"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/9_5highfidelity.png"
                    alt="High-fidelity mockup 5"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/healthcomms/9_6highfidelity.png"
                    alt="High-fidelity mockup 6"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            ) : item.slug === "nfm" ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/nfm/5a_VendorTools.png"
                    alt="Vendor Tools High-Fidelity"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/nfm/5b_HiFi_Resources.png"
                    alt="Resources Hight-Fidelity"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/nfm/5c_HiFi_Updates.png"
                    alt="Updates High-Fidelity"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portfolio/nfm/5d_HiFi_UpdatesDetailed.png"
                    alt="Individual Update High-Fidelity"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            ) : item.slug === "dakota-medical-foundation" ? (
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enhanced Search Experience</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/portfolio/dmf/6a_dmf_high-fidelity.png"
                      alt="DMF High-Fidelity 1"
                      width={800}
                      height={600}
                      className="object-contain"
                      quality={75}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Streamlined Checkout</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/portfolio/dmf/6b_dmf_high-fidelity.png"
                      alt="DMF High-Fidelity 2"
                      width={800}
                      height={600}
                      className="object-contain"
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.content.highFidelityMockups.image}
                  alt="High-fidelity mockups"
                  width={800}
                  height={600}
                  className="object-contain"
                  quality={75}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
} 