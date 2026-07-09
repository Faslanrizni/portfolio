import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Vulnerability Scanning Metasploitable with Tenable Nessus on Kali Linux',
    summary:
      'Ever wondered what a Nessus scan actually catches on a deliberately vulnerable system? I documented every step',
    link: 'https://medium.com/@faslan2002rizni/vulnerability-scanning-metasploitable-with-tenable-nessus-on-kali-linux-f8c228651a2a',
    image:
      'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*PcLlPFWFs3nNPNLVTq9EmQ.jpeg',
    badge: 'Security',
  },
  {
    title: 'Getting Started with Vulnerability Assessment: Learning Through OpenVAS',
    summary:
      'Ever wondered what it actually takes to set up OpenVAS and scan a network from scratch? I documented the entire process',
    link: 'https://medium.com/@faslan2002rizni/getting-started-with-vulnerability-assessment-learning-through-openvas-9f85ac5cfd42',
    image:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/1*EqZ3evwf5OJGeRJ64dNxDg.png',
    badge: 'Security',
  },
  {
    title: 'Performing a Brute Force Attack Using Burp Suite in Kali Linux',
    summary:
      'Ever wondered how Burp Suite Intruder systematically tests thousands of password combinations against a login form using payload positions and wordlists? I documented the full setup, attack configuration, and result analysis',
    link: 'https://medium.com/@faslan2002rizni/performing-a-brute-force-attack-using-burp-suite-in-kali-linux-6711ab2e4ce0',
    image:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ohQIQJ7SDQzWkXfbjLciqA.jpeg',
    badge: 'Security',
  },
    {
    title: 'Windows 10 Access Through Kali Linux Within the Same Network',
    summary:
      "From msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=... LPORT=... -f exe to spinning up a Python HTTP server and catching the callback with Metasploit's multi/handler – this walkthrough covers the complete client-side exploitation chain. I break down payload generation, firewall evasion, delivery over NAT (10.0.2.0/24), and the post-exploitation commands that turn a simple executable into a fully interactive remote session on Windows 10",
    link: 'https://medium.com/@faslan2002rizni/windows-10-access-through-kali-linux-within-the-same-network-6400a4a6f383',
    image:
      'https://tse2.mm.bing.net/th/id/OIP.axxgmSaERBqqdkDrdfGBCwHaEK?r=0&pid=Api&h=220&P=0',
    badge: 'Security',
  },
  {
    title: 'Vulnerability Exploitation with Metasploit Framework on Kali Linux',
    summary:
      "Ever wondered how Metasploit's exploit modules, payloads, and post-exploitation techniques come together to compromise a vulnerable target? I walk through scanning with Nmap, selecting the vsftpd backdoor exploit, configuring RHOSTS and RPORT, and gaining a shell session—all in a controlled lab environment.",
    link: 'https://medium.com/@faslan2002rizni/exploiting-vulnerabilities-with-metasploit-on-kali-linux-c513fe4a7178',
    image:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/1*YplOATA0UHsLXmQgoiiD6A.jpeg',
    badge: 'Security',
  },
      {
    title: 'A Practical Lab for Web Application Security Testing Using Burp Suite and OWASP ZAP in Kali Linux',
    summary:
      "Ever wondered how security testers catch and manipulate HTTP requests before they hit a web server? This practical lab walks through setting up Burp Suite and OWASP ZAP in Kali Linux, routing traffic through an intercepting proxy, and testing against deliberately vulnerable targets like testphp.vulnweb.com—all in a safe, legal environmen",
    link: 'https://medium.com/@faslan2002rizni/a-practical-lab-for-web-application-security-testing-using-burp-suite-and-owasp-zap-in-kali-linux-a971edfc07e4',
    image:
      'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MPcgni0kP_-EfC_Dtn1xAQ.jpeg',
    badge: 'Security',
  },
  {
    title: 'Practical Guide to SQL Injection: How It Works and How to Prevent It',
    summary:
      "Ever wonder how a single quote (') or OR 1=1 can expose an entire database? This guide breaks down real SQL injection attack patterns—and more importantly, how to stop them with parameterized queries and proper validation",
    link: 'https://medium.com/@faslan2002rizni/practical-guide-to-sql-injection-how-it-works-and-how-to-prevent-it-4be3b106e7f5',
    image:
      'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*CrrpxIYywbsTasVcFKVyFw.png',
    badge: 'Security',
  },
];

const Blog = () => {
  return (
    <section className="w-4/5 mx-auto py-20" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-orange-400 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            Blog
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            My latest Medium posts
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            I share practical ideas on software engineering, cybersecurity, and building reliable applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-[#2d2b4f] bg-[#1f1b3d] shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-300">
                    {post.badge}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mb-6 leading-7 text-gray-300">{post.summary}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
                >
                  Read on Medium
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
