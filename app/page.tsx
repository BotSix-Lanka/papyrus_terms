'use client';

import { useState } from 'react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);

  const sections = [
    { id: 'welcome', title: 'Welcome to Papyrus', anchor: 'welcome' },
    { id: 'age-requirement', title: 'Age Requirement', anchor: 'age-requirement' },
    { id: 'account-requirement', title: 'Account Requirement', anchor: 'account-requirement' },
    { id: 'content-ownership', title: 'You Own Your Content', anchor: 'content-ownership' },
    { id: 'service-rights', title: 'Our Rights to the Services', anchor: 'service-rights' },
    { id: 'copyright-issues', title: 'How We Address Copyright Issues', anchor: 'copyright-issues' },
    { id: 'acceptable-use', title: 'Acceptable Use Guidelines', anchor: 'acceptable-use' },
    { id: 'disclaimers', title: 'Disclaimers, Limitations of Liability, and Indemnification', anchor: 'disclaimers' },
    { id: 'advertisements', title: 'Serving Advertisements', anchor: 'advertisements' },
    { id: 'privacy', title: 'Privacy Policy', anchor: 'privacy' },
    { id: 'information-collection', title: 'What Information Do We Collect and Why?', anchor: 'information-collection' },
    { id: 'legal-grounds', title: 'Legal Grounds for Using Your Personal Information', anchor: 'legal-grounds' },
    { id: 'data-storage', title: 'Where is your Personal Information stored?', anchor: 'data-storage' },
    { id: 'user-rights', title: 'Your Rights', anchor: 'user-rights' },
    { id: 'automated-decisions', title: 'Automated Decision Making', anchor: 'automated-decisions' },
    { id: 'data-protection', title: 'How does Papyrus protect and retain my Personal Information?', anchor: 'data-protection' },
    { id: 'data-retention', title: 'How long does Papyrus keep my Personal Information?', anchor: 'data-retention' },
    { id: 'changes', title: 'Changes', anchor: 'changes' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the position to center the element on screen
      const elementRect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = elementRect.height;
      const elementTop = element.offsetTop;
      
      // Calculate the target scroll position to center the element
      const targetScrollTop = elementTop - (windowHeight / 2) + (elementHeight / 2);
      
      // Smooth scroll to the calculated position
      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      
      // Highlight the section briefly
      setHighlightedSection(sectionId);
      setTimeout(() => {
        setHighlightedSection(null);
      }, 2000); // Highlight for 2 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/logo.png" alt="Papyrus Logo" className="h-12 w-auto" />
                <p className='text-gray-500 ml-13'>Terms & Conditions</p>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-sm text-gray-500">Last updated: July 2025</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <nav className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        {section.title}
                      </button>
          </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              {/* Welcome Section */}
              <section 
                id="welcome" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'welcome' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <div className="flex flex-col items-center mb-6">
                  
                </div>
                <div className='flex flex-row gap-1 items-center'>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to</h2>
                <img src="/logo.png" alt="Papyrus Logo" className="h-10 w-auto mt-[-26]" />
                </div>
           
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Welcome to the Papyrus platform, owned and operated by Papyrus Corp. (&quot;Papyrus&quot;, &quot;we&quot;, or &quot;us&quot;). 
                    These Terms of Service, along with our <button onClick={() => scrollToSection('acceptable-use')} className="text-blue-600 hover:text-blue-800 underline">Code of Conduct</button> and <button onClick={() => scrollToSection('privacy')} className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</button>, form a legal agreement 
                    between you and Papyrus.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By using papyrus.com (the &quot;Site&quot;), creating a Papyrus account, posting content (such as stories, 
                    comments, or messages), or viewing content through our website or mobile apps (collectively, the &quot;Services&quot;), 
                    you agree to follow these Terms of Service.
                  </p>
                  <p className="text-gray-700 mb-4">
                    If you do not agree to these terms, you may not use the Papyrus Services.
                  </p>
                </div>
              </section>

              {/* Age Requirement Section */}
              <section 
                id="age-requirement" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'age-requirement' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Age Requirement</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Papyrus Services are only available to individuals who are 16 years of age or older. If we become 
                    aware that someone under the age of 16 is using Papyrus Services, we will terminate their account.
                  </p>
                </div>
              </section>

              {/* Account Requirement Section */}
              <section 
                id="account-requirement" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'account-requirement' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Requirement</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    To access features of the Papyrus platform, you are required to create an account by selecting a 
                    username and password.
                  </p>
                  <p className="text-gray-700 mb-4">
                    You are solely responsible for all activity that occurs under your account and for maintaining the 
                    confidentiality of your login credentials. Sharing your account information with others may result 
                    in unauthorized access, and we may not be able to verify the rightful account holder in such cases. 
                    Papyrus is not liable for any loss or damage arising from the misuse of your account by you or others.
                  </p>
                  <p className="text-gray-700 mb-4">
                    If you believe your account has been accessed without your authorization, please report the issue 
                    promptly at insert contact information.
                  </p>
                </div>
              </section>

              {/* Content Ownership Section */}
              <section 
                id="content-ownership" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'content-ownership' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">You Own Your Content</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Before sharing anything on Papyrus, please review our <button onClick={() => scrollToSection('acceptable-use')} className="text-blue-600 hover:text-blue-800 underline">Content Guidelines</button>. If your content doesn&apos;t 
                    follow these rules, it may be removed at any time.
                  </p>
                  <p className="text-gray-700 mb-4">
                    You retain full ownership of any content you create and upload to Papyrus. However, uploading 
                    content that you do not own does not make it yours. Only share content that you either own or 
                    have permission to use—especially if that includes giving Papyrus the rights needed to display it.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By posting content on Papyrus, you grant us a nonexclusive license to use it on our platform. 
                    This includes displaying, storing, formatting, and distributing your content so that others can 
                    access it through Papyrus. You also have the ability to choose how you license your work to the 
                    community. For guidance, please refer to our <button onClick={() => scrollToSection('copyright-issues')} className="text-blue-600 hover:text-blue-800 underline">Copyright FAQ</button>.
                  </p>
                  <p className="text-gray-700 mb-4">
                    You are solely responsible for the content you post. This means you accept all associated risks, 
                    including legal claims related to ownership, accuracy, or rights.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Papyrus is a free platform, and to support that, we may display <button onClick={() => scrollToSection('advertisements')} className="text-blue-600 hover:text-blue-800 underline">advertisements</button> alongside your 
                    content. We may also use your content to help promote Papyrus. However, we will never sell your 
                    content to third parties without your explicit permission.
                  </p>
                  <p className="text-gray-700 mb-4">
                    At times, you may agree to additional terms—such as when participating in a contest or joining 
                    a program like Papyrus Stars. If there is a conflict between those terms and these general Terms 
                    of Service, the specific terms will apply.
                  </p>
                </div>
              </section>

              {/* Service Rights Section */}
              <section 
                id="service-rights" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'service-rights' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Rights to the Services</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Papyrus owns all rights to the design, layout, and content of the Site and Services. This includes 
                    our source code, logos, and visual elements. You may not copy, modify, or use any part of our 
                    design or branding without our written permission, unless stated otherwise in this section.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Please do not use the Papyrus logo or trademarks in a way that suggests Papyrus endorses or is 
                    affiliated with your product, service, or business—unless we have given you written approval. 
                    You must also not alter our logo in any way, including resizing, decorating, or changing its 
                    appearance. We value the integrity of our brand and aim to keep it consistent. For proper use, 
                    please refer to our Brand Guidelines.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Papyrus may modify, limit, or discontinue parts of the Services at any time, without prior notice. 
                    We also reserve the right to remove any content you post, at our sole discretion.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Additionally, Papyrus may access, store, and share your information if we believe it is necessary to:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                    <li>Comply with applicable laws or legal requests</li>
                    <li>Enforce our Terms of Service or investigate potential violations</li>
                    <li>Detect and prevent fraud, security breaches, or technical problems</li>
                    <li>Respond to user support requests</li>
                    <li>Protect the rights, property, and safety of Papyrus, our users, or the public</li>
        </ol>
                </div>
              </section>

              {/* Copyright Issues Section */}
              <section 
                id="copyright-issues" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'copyright-issues' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Address Copyright Issues</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Papyrus enforces a strict policy against copyright infringement in accordance with Italian 
                    copyright law (Law No. 633/1941) and the European Union Directive on Copyright in the Digital 
                    Single Market (Directive (EU) 2019/790). This policy is applied consistently across all countries 
                    where our Services are available.
                  </p>
                  <p className="text-gray-700 mb-4">
                    If you believe that your copyrighted work has been used on Papyrus without your permission, 
                    you may submit a formal copyright infringement notice through our Reporting Copyright 
                    Infringement page.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Papyrus reserves the right to remove or disable access to any content that is alleged to infringe 
                    copyright, at our sole discretion, without prior notice and without liability to any party. In cases 
                    of repeated infringement, we may suspend or terminate user accounts in accordance with applicable laws.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We also actively monitor websites that copy or distribute Papyrus content without authorization. 
                    When such sites are identified, we take action to have the infringing content removed or access 
                    to it disabled. In order to act on your behalf in such cases, Papyrus requires your legal 
                    authorization at the time of registration. This authorization enables us to send takedown requests 
                    under Italian and EU copyright laws to internet service providers and other entities responsible 
                    for hosting or distributing the infringing material.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By granting this authorization, you allow Papyrus to protect your rights by pursuing the removal 
                    or disabling of access to infringing or allegedly infringing materials that have been shared 
                    without your consent.
                  </p>
                </div>
              </section>

              {/* Acceptable Use Section */}
              <section 
                id="acceptable-use" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'acceptable-use' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptable Use Guidelines</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Papyrus is used by millions of people around the world. To keep the platform respectful, safe, 
                    and enjoyable for everyone, we expect all users to act responsibly. Please review our Code of 
                    Conduct for detailed community standards. In addition to those rules, please keep the following 
                    guidelines in mind:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow the law.</h3>
                      <p className="text-gray-700">
                        Do not break any laws, infringe on the rights of others, or violate any legal agreements you may have.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Protect others&apos; devices.</h3>
                      <p className="text-gray-700">
                        Do not upload or share viruses, malware, or any software that is intended to damage or 
                        interfere with another user&apos;s device or system.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Do not disrupt Papyrus&apos;s platform.</h3>
                      <p className="text-gray-700">
                        Avoid any actions that interfere with the proper functioning of Papyrus. This includes attempts 
                        to bypass our security measures, gain unauthorized access to our systems, or overload our 
                        servers or those of our partners.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No scraping or unauthorized data collection.</h3>
                      <p className="text-gray-700">
                        Do not use bots, scripts, or automated tools to collect content or data from Papyrus. Manual 
                        copying for such purposes is also prohibited.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Respect creators&apos; rights.</h3>
                      <p className="text-gray-700">
                        Do not copy, reproduce, translate, distribute, or build upon someone else&apos;s work without their 
                        clear permission.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Respect Papyrus&apos;s intellectual property.</h3>
                      <p className="text-gray-700">
                        Do not reverse engineer, decompile, or try to extract any part of Papyrus&apos;s software, design, or source code.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Use Papyrus for personal, not commercial, purposes.</h3>
                      <p className="text-gray-700">
                        Papyrus is intended for individual use—not for promoting or selling unrelated products or services. 
                        You are welcome to promote your own books for sale on third-party platforms, but using Papyrus 
                        to advertise unrelated products or services is not allowed.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclaimers Section */}
              <section 
                id="disclaimers" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'disclaimers' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimers, Limitations of Liability, and Indemnification</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Legal Applicability</h3>
                      <p className="text-gray-700">
                        These terms apply only to the extent allowed by applicable law. In some jurisdictions, certain 
                        legal protections—such as implied warranties or limits on liability—cannot be waived. Nothing 
                        in this section affects any rights you may have that cannot legally be limited or excluded.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">2. No Warranties</h3>
                      <p className="text-gray-700">
                        You use Papyrus&apos;s Services and content at your own risk. All Services and content are provided 
                        &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind. Papyrus makes no express or implied 
                        guarantees, including those related to merchantability, fitness for a particular purpose, 
                        reliability, security, or non-infringement. We also do not promise that the Services will be 
                        uninterrupted or error-free.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Responsibility for Content</h3>
                      <p className="text-gray-700">
                        All content posted on Papyrus, whether public or private, is the sole responsibility of the person 
                        who created it. We do not routinely monitor or verify user content and do not guarantee its 
                        accuracy, reliability, or truthfulness. You may encounter content that is offensive, misleading, or 
                        mislabeled, and you access such content at your own discretion.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Release of Liability</h3>
                      <p className="text-gray-700">
                        By using Papyrus, you agree to release us from any claims, disputes, damages, or legal demands 
                        related to conflicts between users, disputes involving users and third parties, and any issues 
                        that arise through the use of the Services. This release includes both known and unknown claims, 
                        whether disclosed or not.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Papyrus&apos;s Liability</h3>
                      <p className="text-gray-700">
                        Papyrus is not liable for any kind of damages resulting from your use of the Services. This 
                        includes, but is not limited to service interruptions, errors, or security issues, all categories 
                        of damages (direct, indirect, incidental, punitive, or consequential), loss of data, income, or 
                        profits, and actions or content provided by other users or third parties. In all cases, Papyrus&apos;s 
                        total liability will not exceed 100 Canadian dollars (CAD $100).
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Your Responsibility to Papyrus</h3>
                      <p className="text-gray-700">
                        If your actions cause Papyrus to face legal or financial issues, you agree to compensate us for 
                        any resulting losses. This includes legal fees, damages, and claims arising from your breach of 
                        these Terms or misuse of the Services. Papyrus reserves the right to assume full control over any 
                        legal defense, and you agree to cooperate fully.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Third-Party Links</h3>
                      <p className="text-gray-700">
                        The platform may contain links to external websites that are not controlled or endorsed by Papyrus. 
                        If you choose to visit those sites, you do so at your own risk.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Advertisements Section */}
              <section 
                id="advertisements" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'advertisements' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Serving Advertisements</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    To keep Papyrus free for everyone, we display advertisements and promotions from third-party 
                    advertisers within the Service. These ads are provided by external partners, and Papyrus does 
                    not control or endorse their content.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Please be aware that Papyrus is not responsible for any issues that may result from your 
                    interactions with these advertisers. This includes any losses, damages, or disputes arising from 
                    your reliance on their ads or from any commercial or legal transactions you enter into with them.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Any dealings you have with advertisers—such as clicking on an ad, purchasing a product, or 
                    signing up for a service—are strictly between you and the advertiser.
                  </p>
                </div>
              </section>

              {/* Privacy Policy Section */}
              <section 
                id="privacy" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'privacy' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    At Papyrus Corp. (&quot;Papyrus,&quot; &quot;we,&quot; or &quot;us&quot;), we are dedicated to protecting your privacy and 
                    keeping your information secure. Papyrus collects and processes information about you in several ways. 
                    This Privacy Policy explains how we collect, use, share, and protect your personal information 
                    (&quot;Personal Information&quot;) when you create a Papyrus account and use papyrus.com (the &quot;Site&quot;) or our 
                    mobile apps to post content to the Papyrus community, including stories you write, comments, and 
                    messages (the &quot;Services&quot;).
                  </p>
                  <p className="text-gray-700 mb-4">
                    Please note that our <button onClick={() => scrollToSection('welcome')} className="text-blue-600 hover:text-blue-800 underline">Terms of Service</button> also apply to this Privacy Policy. By creating a Papyrus 
                    account, using the Services, or providing any Personal Information through the Services, you agree 
                    to the collection, use, and sharing of your information as described in this Privacy Policy. If 
                    you do not agree with how we use your Personal Information, please stop using the Services.
                  </p>
                  <p className="text-gray-700 mb-4">
                    This is important information, so we encourage you to read it carefully.
                  </p>
                </div>
              </section>

              {/* Information Collection Section */}
              <section 
                id="information-collection" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'information-collection' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Information Do We Collect and Why?</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    To create your Papyrus account and use our Services, we collect and process some Personal Information. 
                    Depending on how you use Papyrus, the information we collect may include:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect:</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Required information: Your username, email address, date of birth, and password.</li>
                        <li>Third-party info: If you sign up through services like Facebook or Google, they share information like your email and birthdate with us.</li>
                        <li>Optional information: Details you provide such as your real name, gender, and location.</li>
                        <li>Automatically collected info: Data from your use of Papyrus, including IP address, cookies, device and browser details, pages visited, and actions taken (like voting).</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Why We Use This Information:</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>To create and manage your Papyrus account and provide the Services.</li>
                        <li>To recognize you when you sign in, post stories, or comment.</li>
                        <li>To show content that fits your age.</li>
                        <li>To provide customer support and technical help.</li>
                        <li>To communicate important updates and improvements.</li>
                        <li>To send marketing emails, with your consent where required by law.</li>
                        <li>To display your information on your profile if you choose.</li>
                        <li>To run surveys, contests, and promotions, and give prizes.</li>
                        <li>To personalize your experience, including tailored story recommendations and ads.</li>
                        <li>To measure how you use and enjoy our Services, and improve them.</li>
                        <li>To detect and prevent fraud, abuse, spam, illegal activity, or violations of our Terms.</li>
                        <li>For security and to enforce our policies and legal rights.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Legal Grounds Section */}
              <section 
                id="legal-grounds" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'legal-grounds' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Grounds for Using Your Personal Information</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    At Papyrus, we only use your personal information when we have a valid legal reason. Below is a 
                    list of how we use your data and the legal basis for each purpose, especially for users in the 
                    European Economic Area (EEA), United Kingdom, and Switzerland.
                  </p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">1. To create your Papyrus account and provide our services</h3>
                        <p className="text-gray-700 text-sm">Legal Basis: Necessary for performing our Terms of Service.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">2. To identify you across the platform</h3>
                        <p className="text-gray-700 text-sm">Legal Basis: Legitimate interest in delivering and maintaining our services.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">3. To provide age-appropriate content</h3>
                        <p className="text-gray-700 text-sm">Legal Basis: Legitimate interest in complying with content guidelines.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">4. To offer technical and customer support</h3>
                        <p className="text-gray-700 text-sm">Legal Basis: Legitimate interest in assisting users and solving issues.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">5. To send essential updates and service-related messages</h3>
                        <p className="text-gray-700 text-sm">Legal Basis: Necessary for fulfilling our contract with you.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">6. To send marketing emails</h3>
                        <p className="text-gray-700 text-sm">Legal Basis: Your consent (only where required by law).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Storage Section */}
              <section 
                id="data-storage" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'data-storage' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Where is your Personal Information stored?</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Our services are primarily operated from our offices in Italy. However, the Personal Information 
                    you provide through Papyrus may be transferred to and stored in other countries, such as the 
                    United States, for processing and storage. Additionally, our trusted third-party service providers 
                    may also handle or store your information on servers outside your country.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By using Papyrus or submitting your Personal Information through our services, you agree to 
                    this transfer and processing. Please note that privacy protections and government access to 
                    data may vary in these countries compared to your own.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We follow all applicable legal requirements when transferring Personal Information internationally. 
                    If you are located in the European Economic Area, Switzerland, or the UK, we use approved methods 
                    for transferring your data, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Decisions by the EU Commission, Swiss government, or UK authorities confirming adequate protection</li>
                    <li>Contractual agreements ensuring data protection</li>
                    <li>Other legal transfer mechanisms</li>
                  </ul>
                </div>
              </section>

              {/* User Rights Section */}
              <section 
                id="user-rights" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'user-rights' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    If you want to access, correct, or delete any Personal Information we have about you, please 
                    contact us by email at privacy@papyrus.com. We will respond to your requests as required by 
                    law and our policies, taking into account any technical limitations. You can also update or delete 
                    your Personal Information by logging into your account and editing your profile. For more details about your rights, see our <button onClick={() => scrollToSection('user-rights')} className="text-blue-600 hover:text-blue-800 underline">Your Rights</button> section.
                  </p>
                  <p className="text-gray-700 mb-4">
                    If you live in the European Economic Area, Switzerland, or the United Kingdom, you have these 
                    additional rights regarding your Personal Information:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Access and Portability</h3>
                      <p className="text-gray-700">
                        You can ask us to provide a copy of the Personal Information we hold about you, including a 
                        machine-readable copy of the information you have given us, and details about how we use it.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Correction and Deletion</h3>
                      <p className="text-gray-700">
                        You can request that we correct any inaccurate information, or have your data anonymized or 
                        deleted when appropriate. You can also update or delete your Personal Information by logging 
                        into your profile.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Restriction and Objection</h3>
                      <p className="text-gray-700">
                        You can ask us to limit how we use your Personal Information or object to its use.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Withdrawal of Consent</h3>
                      <p className="text-gray-700">
                        You can withdraw any consent you have given us for processing your Personal Information at 
                        any time, free of charge. This will not affect the lawfulness of processing done before you 
                        withdrew consent.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Filing a Complaint</h3>
                      <p className="text-gray-700">
                        You have the right to file a complaint with a relevant data protection authority, such as 
                        in your country of residence or work.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Automated Decisions Section */}
              <section 
                id="automated-decisions" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'automated-decisions' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Automated Decision Making</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    We do not make decisions that have legal or similarly significant effects on you based solely on 
                    automated processing of your Personal Information. Any decisions related to the processing of your 
                    data involve human review and intervention.
                  </p>
        </div>
              </section>

              {/* Data Protection Section */}
              <section 
                id="data-protection" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'data-protection' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How does Papyrus protect and retain my Personal Information?</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    We continually update and maintain physical, organizational, contractual, and technical security 
                    measures to protect your Personal Information from loss, theft, unauthorized access, disclosure, 
                    copying, use, or alteration. Only employees who need access to your information for their job 
                    responsibilities are allowed to view it. All data transmissions on Papyrus platforms are encrypted 
                    to safeguard your Personal Information.
                  </p>
                </div>
              </section>

              {/* Data Retention Section */}
              <section 
                id="data-retention" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'data-retention' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How long does Papyrus keep my Personal Information?</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    We keep your Personal Information only as long as needed for the purposes it was collected, 
                    unless the law requires us to keep it longer. When deciding how long to keep your data, we 
                    consider factors like the services you use, our relationship with you, legal requirements, and any 
                    limitation periods. For details on how we protect your data, see our <button onClick={() => scrollToSection('data-protection')} className="text-blue-600 hover:text-blue-800 underline">Data Protection</button> section.
                  </p>
                  <p className="text-gray-700 mb-4">
                    If you create a Papyrus account, we will retain your Personal Information while your account is 
                    active. When you close your account, it will be deactivated for six months. During this time, 
                    your account won&apos;t be visible, but your public contributions and comments will remain, though 
                    they will be anonymized.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Within these six months, you can restore your account if it was closed by mistake, and your 
                    contributions will be linked back to your profile. After six months, we permanently delete your 
                    Personal Information, but anonymized comments and contributions will remain on the platform.
                  </p>
                </div>
              </section>

              {/* Changes Section */}
              <section 
                id="changes" 
                className={`mb-12 transition-all duration-500 ${
                  highlightedSection === 'changes' 
                    ? 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 rounded-r-lg' 
                    : ''
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    We may update this Privacy Policy from time to time. If you disagree with any changes and do 
                    not want your Personal Information to be handled under the updated policy, please close your 
                    account or stop using the Services. We recommend reviewing this Privacy Policy regularly.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
