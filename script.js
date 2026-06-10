/* ==========================================================================
   NexusTech Blog Script - Client-Side Search, Filters, Pagination & Reader Modal
   ========================================================================== */

// --- Article Database ---
const ARTICLES = [
    {
        id: 1,
        title: "The Era of Cognitive Autonomy: How AI Agents are Redefining Software Engineering",
        excerpt: "AI models are transitioning from simple copilot autocompletions to fully autonomous software engineering agents. Explore the architectural shifts, safety sandboxes, and skills you need to build code in 2026.",
        category: "AI",
        tag: "Generative AI",
        author: "Dr. Evelyn Carter",
        authorInitials: "EC",
        date: "June 10, 2026",
        readTime: "6 min read",
        image: "assets/hero_ai.png",
        content: [
            { type: "p", text: "The software development lifecycle is undergoing its most radical transformation since the transition from punch cards to compilers. We are moving beyond the era of 'Copilots'—which merely suggest lines of code or complete functions—into the age of cognitive, autonomous AI agents." },
            { type: "p", text: "These new systems are capable of parsing complex project requirements, analyzing massive codebases, planning multi-step directory modifications, debugging compile-time and runtime issues, and writing automated tests to verify their own edits. In essence, they don't just write code; they build software." },
            { type: "h3", text: "The Shift to Multi-Agent Planning" },
            { type: "p", text: "Modern autonomous coding relies on multi-agent architectures where different specialized models handle individual aspects of the coding lifecycle. For example, a Planning Agent designs the architecture, a Coding Agent modifies files, and a Tester Agent executes testing suites inside sandbox environments." },
            { type: "code", code: `// Emulation of a multi-agent prompt flow
const planner = new PlanningAgent({ model: "gemini-3.5-pro" });
const coder = new CodingAgent({ sandbox: true });

async function refactorModule(issueDetails) {
  const plan = await planner.designSteps(issueDetails);
  const patch = await coder.applyChanges(plan.steps);
  const testResults = await coder.runTests(patch.files);
  
  if (!testResults.passed) {
    return coder.selfCorrect(testResults.logs);
  }
  return patch.commit();
}` },
            { type: "quote", text: "AI is transitioning from a tool that developers use, to an environment in which developers direct and orchestrate." },
            { type: "h3", text: "What This Means for Human Developers" },
            { type: "p", text: "The developer's role is shifting toward system architecture, strict verification, security auditing, and product management. Knowing how to write syntactically correct code is no longer the primary bottleneck; understanding how systems interact, defining precise specifications, and guiding autonomous agents are now the foundational skills for the future." }
        ]
    },
    {
        id: 2,
        title: "Mastering React Server Components and Next.js App Router for Global Scale",
        excerpt: "Understand how React Server Components (RSC) split client and server logic seamlessly to optimize performance, minimize bundles, and enhance SEO rendering at the edge.",
        category: "Web Dev",
        tag: "React & NextJS",
        author: "Liam Anderson",
        authorInitials: "LA",
        date: "June 8, 2026",
        readTime: "5 min read",
        image: "assets/web_dev.png",
        content: [
            { type: "p", text: "React Server Components (RSC) have completely reimagined how we design modern web applications. By running component rendering directly on the server (or at the edge), RSCs allow developers to fetch data directly inside components and send pre-rendered HTML to the user, eliminating massive client bundle sizes." },
            { type: "p", text: "With Next.js App Router, this paradigm becomes production-ready, supporting static rendering, dynamic routing, and instant client interactivity in a single cohesive project structure." },
            { type: "h3", text: "Visualizing the Server-Client Boundary" },
            { type: "p", text: "To make the most of RSC, you must organize your code based on where it should execute. Components by default are server-rendered. When client interactivity is needed (such as event handlers, state hooks, or browser APIs), developers explicitly declare the boundary." },
            { type: "code", code: `// app/dashboard/page.js - Server Component (Default)
import { fetchUserMetrics } from '@/lib/db';
import InteractiveGraph from './InteractiveGraph'; // Client Component

export default async function Dashboard() {
  const metrics = await fetchUserMetrics(); // Fetches directly from DB
  
  return (
    <main class="dashboard-container">
      <h1>Dashboard Metrics</h1>
      <p>Real-time analytics fetched at the edge.</p>
      {/* Client component receives data as props */}
      <InteractiveGraph initialData={metrics} />
    </main>
  );
}` },
            { type: "p", text: "This split ensures that massive parsing engines, DB clients, and heavy charting dependencies are kept off the user's browser, resulting in lightning-fast load times and outstanding Core Web Vitals scorecards." }
        ]
    },
    {
        id: 3,
        title: "Why Rust is Becoming the Industry Choice for Critical Infrastructure Systems",
        excerpt: "Examine Rust's memory safety guarantees, zero-cost abstractions, and fear-free concurrency, and why tech leaders are migrating their backend systems from C++ and Java.",
        category: "Programming",
        tag: "Rust",
        author: "Sarah Jenkins",
        authorInitials: "SJ",
        date: "June 7, 2026",
        readTime: "7 min read",
        image: "assets/web_dev.png",
        content: [
            { type: "p", text: "Historically, systems developers were forced to make a painful choice: choose C++ for ultimate hardware control and raw speed, or choose garbage-collected languages like Java or Go for safety. Rust has shattered this trade-off." },
            { type: "p", text: "Through its unique borrow checker and strict ownership system, Rust guarantees complete memory safety at compile-time—eliminating segmentation faults, null pointer exceptions, and data races completely without the overhead of a runtime garbage collector." },
            { type: "h3", text: "Understanding Ownership and Borrowing" },
            { type: "p", text: "At the heart of Rust is a simple rule: every resource has a single owner. When the owner goes out of scope, the resource is automatically freed. If you want to share data, you must explicitly borrow it using references." },
            { type: "code", code: `fn main() {
    let message = String::from("Hello, Security!"); // owner of the memory
    
    // Borrow message read-only
    print_message(&message);
    
    // Ownership remains with 'message'
    println!("Still available: {}", message); 
}

fn print_message(msg: &String) {
    println!("Borrowed content: {}", msg);
}` },
            { type: "quote", text: "By shifting safety checks from a runtime monitoring system to compile-time analysis, Rust enables engineers to write low-level code that is both blisteringly fast and structurally secure." },
            { type: "p", text: "Major cloud providers, databases, and critical systems are rewriting core infrastructure components in Rust. From Linux kernels to high-throughput message brokers, Rust is establishing itself as the base language of the modern, secure internet." }
        ]
    },
    {
        id: 4,
        title: "Quantum Supremacy in Cryptography: Preparing for Post-Quantum Encryption",
        excerpt: "As quantum computing power accelerates, standard RSA and ECC algorithms face complete obsolescence. Learn about NIST post-quantum cryptography standards and how to secure files today.",
        category: "Emerging Tech",
        tag: "Quantum & Cyber",
        author: "Prof. Marcus Sterling",
        authorInitials: "MS",
        date: "June 5, 2026",
        readTime: "8 min read",
        image: "assets/quantum.png",
        content: [
            { type: "p", text: "Classical cryptographic frameworks like RSA and Elliptic Curve Cryptography (ECC) rely on the mathematical difficulty of factoring large integers and computing discrete logarithms. For classical supercomputers, resolving these equations takes millions of years." },
            { type: "p", text: "However, a sufficiently powerful quantum computer running Shor's Algorithm can solve these equations in minutes. This puts almost all encrypted communication, digital signatures, and blockchain platforms at immediate threat." },
            { type: "h3", text: "The Transition to Post-Quantum Cryptography (PQC)" },
            { type: "p", text: "In response to this looming digital threat, the National Institute of Standards and Technology (NIST) has standardized several lattice-based PQC algorithms. These math problems are designed to be insolvable by both classical and quantum systems." },
            { type: "code", code: `// Kyber (ML-KEM) and Dilithium (ML-DSA) key exchanges
#include <oqs/oqs.h>
#include <stdio.h>

int main() {
    // Initialize quantum-safe Key Encapsulation Mechanism
    OQS_KEM *kem = OQS_KEM_new(OQS_KEM_alg_kyber_768);
    if (kem == NULL) {
        printf("Algorithm initialization failed!\\n");
        return 1;
    }
    printf("Successfully initialized Kyber-768 for quantum-safe communication.\\n");
    OQS_KEM_free(kem);
    return 0;
}` },
            { type: "p", text: "Organizations must adopt a 'crypto-agile' architectural mindset today. Ensuring that encryption schemes can be swapped dynamically without rebuilding entire applications is the best hedge against the rapidly accelerating timeline of quantum development." }
        ]
    },
    {
        id: 5,
        title: "Beyond Large Language Models: The Rise of Multimodal Generative AI Systems",
        excerpt: "Text alone is no longer the limit. Multimodal systems process text, audio, images, and video in real-time, opening up next-generation interfaces and unified semantic engines.",
        category: "AI",
        tag: "Multimodal AI",
        author: "Elena Rostova",
        authorInitials: "ER",
        date: "June 3, 2026",
        readTime: "5 min read",
        image: "assets/hero_ai.png",
        content: [
            { type: "p", text: "While early generative AI breakthroughs focused heavily on processing and outputting raw text, the frontier has moved decisively to multimodal systems. These unified models process text, video, audio, and code natively within a single, shared token embedding space." },
            { type: "p", text: "By doing so, the AI doesn't translate images into descriptive text prompts first; it sees, hears, and reads concurrently, understanding contextual relationships across different formats far more deeply." }
        ]
    },
    {
        id: 6,
        title: "Unlocking the Secrets of CSS Container Queries and Flexbox Subgrid Layouts",
        excerpt: "Move away from global viewport media queries. Learn how container queries let components adjust fluidly based on the size of their parent containers rather than the overall screen.",
        category: "Web Dev",
        tag: "CSS Grid & Layout",
        author: "James Thornton",
        authorInitials: "JT",
        date: "June 1, 2026",
        readTime: "4 min read",
        image: "assets/web_dev.png",
        content: [
            { type: "p", text: "For years, responsive design meant checking screen width. The browser window was the final metric. However, in modern component-driven architectures, a card component might sit in a wide sidebar, a narrow footer column, or a spacious central layout grid." },
            { type: "p", text: "CSS Container Queries solve this by allowing child styling to adapt to the boundaries of its immediate parent wrapper, unlocking true design modularity." },
            { type: "code", code: `/* Setup container tracking */
.card-wrapper {
  container-type: inline-size;
  container-name: post-container;
}

/* Apply styles when parent width exceeds 400px */
@container post-container (min-width: 400px) {
  .blog-card {
    display: flex;
    flex-direction: row;
  }
}` }
        ]
    },
    {
        id: 7,
        title: "Advanced TypeScript Patterns: Conditional Types, Mapped Types, and Templates",
        excerpt: "Ditch the 'any' type forever. Level up your TypeScript knowledge with generic constraints, utility maps, and template literal type schemas for ultimate type-safety.",
        category: "Programming",
        tag: "TypeScript",
        author: "Hiroshi Tanaka",
        authorInitials: "HT",
        date: "May 28, 2026",
        readTime: "6 min read",
        image: "assets/web_dev.png",
        content: [
            { type: "p", text: "TypeScript is often treated as simple type labeling. However, its type system is a fully functional programming language in its own right. With conditional types and template literal types, we can build dynamic, self-documenting libraries that validate code layout automatically." },
            { type: "code", code: `// Advanced template type checking
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<"click">; // Resolves to: "onClick"

// Mapped Readonly Utility
type SecureObject<T> = {
  readonly [P in keyof T]: T[P];
};` }
        ]
    },
    {
        id: 8,
        title: "Demystifying Zero-Knowledge Proofs (ZKP) in Modern Web Systems",
        excerpt: "Prove assertions to a third-party server without revealing the underlying data. Explore the cryptography, SNARKs, and decentralized applications powered by ZKPs.",
        category: "Emerging Tech",
        tag: "Cybersecurity",
        author: "Sophia Martinez",
        authorInitials: "SM",
        date: "May 25, 2026",
        readTime: "7 min read",
        image: "assets/quantum.png",
        content: [
            { type: "p", text: "A zero-knowledge proof (ZKP) allows one party (the prover) to prove to another party (the verifier) that a given statement is mathematically true, without revealing any information beyond the statement's validity itself." },
            { type: "p", text: "This technology is revolutionizing decentralized identity verification, confidential bank transfers, and private scaling systems on global ledgers." }
        ]
    },
    {
        id: 9,
        title: "The Future of Web Assembly: Bringing Desktop Power to the Browser",
        excerpt: "WebAssembly (WASM) is escaping the sandbox. Explore how the WebAssembly System Interface (WASI) enables high-performance cross-platform workloads in web components.",
        category: "Web Dev",
        tag: "WebAssembly",
        author: "Ava Patel",
        authorInitials: "AP",
        date: "May 20, 2026",
        readTime: "6 min read",
        image: "assets/web_dev.png",
        content: [
            { type: "p", text: "WebAssembly is no longer just for game engines running in the browser. With WASI (WebAssembly System Interface), WASM is expanding into serverless architectures, cloud environments, and local edge workers, offering fast compilation speeds, near-native performance, and robust sandboxed execution." }
        ]
    },
    {
        id: 10,
        title: "Fine-Tuning Open Source LLMs: A Developer's Practical Guide to LoRA",
        excerpt: "Don't run expensive training from scratch. Leverage Low-Rank Adaptation (LoRA) to train models on custom developer datasets with a single consumer GPU card.",
        category: "AI",
        tag: "Machine Learning",
        author: "Derrick Vance",
        authorInitials: "DV",
        date: "May 18, 2026",
        readTime: "8 min read",
        image: "assets/hero_ai.png",
        content: [
            { type: "p", text: "Training large language models with billions of parameters requires massive computational infrastructure. Low-Rank Adaptation (LoRA) resolves this obstacle by freezing the base model weights and inserting small trainable parameter layers, drastically cutting training hardware requirements." }
        ]
    },
    {
        id: 11,
        title: "Designing Distributed Systems: Redundancy, Consensus, and Eventual Consistency",
        excerpt: "Mastering complex microservice architectures. Understand the trade-offs of the CAP theorem, Raft consensus protocols, and how databases maintain consistency.",
        category: "Programming",
        tag: "Distributed Systems",
        author: "Clara Oswald",
        authorInitials: "CO",
        date: "May 15, 2026",
        readTime: "7 min read",
        image: "assets/web_dev.png",
        content: [
            { type: "p", text: "Building software that runs reliably across hundreds of independent server clusters is difficult. The CAP theorem proves we must balance Consistency, Availability, and Partition tolerance, making consensus systems like Raft and Paxos crucial tools for modern backend developers." }
        ]
    },
    {
        id: 12,
        title: "State-of-the-Art Cybersecurity Defenses Against AI-Driven Phishing",
        excerpt: "As cyber criminals weaponize natural language LLMs to launch targeted email and social attacks, defense mechanisms must deploy autonomous AI sentinels.",
        category: "Emerging Tech",
        tag: "Cybersecurity",
        author: "Nikhil Sharma",
        authorInitials: "NS",
        date: "May 10, 2026",
        readTime: "6 min read",
        image: "assets/quantum.png",
        content: [
            { type: "p", text: "Social engineering phishing scripts are no longer recognizable by bad grammar and suspicious layout errors. Generative models can formulate hyper-targeted attacks in seconds. Modern defenses must employ real-time natural language filters to isolate threats before users ever click a link." }
        ]
    }
];

// --- Global Application State ---
let filteredArticles = [...ARTICLES];
let currentPage = 1;
const postsPerPage = 6;
let activeCategory = "all";
let activeSearchQuery = "";

// --- DOM Element References ---
const blogGrid = document.getElementById("blogGrid");
const paginationContainer = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const sidebarCategories = document.getElementById("sidebarCategories");
const sidebarRecentPosts = document.getElementById("sidebarRecentPosts");
const themeToggle = document.getElementById("themeToggle");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");
const scrollProgress = document.getElementById("scrollProgress");
const articleModal = document.getElementById("articleModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalBody = document.getElementById("modalBody");
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const toastContainer = document.getElementById("toastContainer");
const filterHeader = document.getElementById("filterHeader");
const filterCategoryName = document.getElementById("filterCategoryName");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const heroReadBtn = document.getElementById("heroReadBtn");

// --- Helper Functions ---

// Generate syntax-highlighted HTML for code snippets
function highlightCode(code) {
    // Simple mock syntax parser for premium styling
    return code
        .replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>')
        .replace(/(const|let|var|function|return|import|export|from|async|await|class|new|extends|fn|let|pub|struct|use|#include|int|if|unsigned|void|#define)/g, '<span class="code-keyword">$1</span>')
        .replace(/("[^"]*"|'[^']*'|`[^`]*`)/g, '<span class="code-string">$1</span>')
        .replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>')
        .replace(/\b(refactorModule|designSteps|applyChanges|runTests|selfCorrect|fetchUserMetrics|print_message|OQS_KEM_new|OQS_KEM_free|main)\b/g, '<span class="code-function">$1</span>');
}

// Show animated Toast Alerts
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    
    // Smooth remove after 4 seconds
    setTimeout(() => {
        toast.style.animation = "toastIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25) reverse forwards";
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 4000);
}

// Calculate and render category item counts in the sidebar
function renderCategoriesSidebar() {
    const counts = ARTICLES.reduce((acc, article) => {
        acc[article.category] = (acc[article.category] || 0) + 1;
        return acc;
    }, {});
    
    let html = `
        <li class="category-item ${activeCategory === 'all' ? 'active' : ''}" data-category="all">
            <span>All Articles</span>
            <span class="category-count">${ARTICLES.length}</span>
        </li>
    `;
    
    Object.keys(counts).forEach(cat => {
        html += `
            <li class="category-item ${activeCategory === cat ? 'active' : ''}" data-category="${cat}">
                <span>${cat}</span>
                <span class="category-count">${counts[cat]}</span>
            </li>
        `;
    });
    
    sidebarCategories.innerHTML = html;

    // Attach click listeners to sidebar categories
    document.querySelectorAll(".category-item").forEach(item => {
        item.addEventListener("click", () => {
            const cat = item.getAttribute("data-category");
            updateCategoryFilter(cat);
        });
    });
}

// Render Recent (Popular) Posts inside sidebar
function renderPopularPostsSidebar() {
    // Slice first 4 articles as popular posts
    const popular = ARTICLES.slice(1, 5);
    let html = "";
    
    popular.forEach(post => {
        html += `
            <li class="recent-post-item" data-id="${post.id}">
                <div class="recent-post-thumb">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="recent-post-details">
                    <h4 class="recent-post-title">${post.title}</h4>
                    <span class="recent-post-date">${post.date}</span>
                </div>
            </li>
        `;
    });
    
    sidebarRecentPosts.innerHTML = html;

    // Attach click handlers to recent posts list
    document.querySelectorAll(".recent-post-item").forEach(item => {
        item.addEventListener("click", () => {
            const id = parseInt(item.getAttribute("data-id"));
            openArticleModal(id);
        });
    });
}

// Update scroll progress bar based on user interaction
function updateScrollProgress() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    scrollProgress.style.width = scrolled + "%";
}

// --- Filtering Logic ---
function updateFilters() {
    // Reset filtered collection
    filteredArticles = ARTICLES.filter(article => {
        // Match category
        const matchesCategory = activeCategory === "all" || article.category.toLowerCase() === activeCategory.toLowerCase();
        
        // Match search query
        const matchesSearch = activeSearchQuery === "" || 
            article.title.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
            article.tag.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
            article.author.toLowerCase().includes(activeSearchQuery.toLowerCase());
            
        return matchesCategory && matchesSearch;
    });

    // Update filter feedback banner in UI
    if (activeCategory !== "all" || activeSearchQuery !== "") {
        filterHeader.style.display = "flex";
        let titleText = "";
        if (activeCategory !== "all" && activeSearchQuery !== "") {
            titleText = `"${activeCategory}" & matching "${activeSearchQuery}"`;
        } else if (activeCategory !== "all") {
            titleText = activeCategory;
        } else {
            titleText = `Search: "${activeSearchQuery}"`;
        }
        filterCategoryName.textContent = titleText;
    } else {
        filterHeader.style.display = "none";
    }

    currentPage = 1;
    renderArticlesGrid();
    renderPaginationControls();
    renderCategoriesSidebar(); // Highlight active category dynamically
    syncActiveNavigationLinks();
}

function updateCategoryFilter(category) {
    activeCategory = category;
    updateFilters();
    // Scroll smoothly to top of main container on filter selection
    const mainSection = document.querySelector(".main-layout");
    if (mainSection) {
        window.scrollTo({
            top: mainSection.offsetTop - 100,
            behavior: "smooth"
        });
    }
}

// Highlight active categories in navigation bar links
function syncActiveNavigationLinks() {
    // Synchronize desktop navbar
    document.querySelectorAll(".nav-link").forEach(link => {
        const filter = link.getAttribute("data-filter");
        if (filter.toLowerCase() === activeCategory.toLowerCase()) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Synchronize mobile overlay
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
        const filter = link.getAttribute("data-filter");
        if (filter.toLowerCase() === activeCategory.toLowerCase()) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// --- Card Rendering & Pagination ---
function renderArticlesGrid() {
    blogGrid.innerHTML = "";
    
    if (filteredArticles.length === 0) {
        blogGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fa-solid fa-square-envelope" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 10px;">No Articles Found</h3>
                <p style="color: var(--text-secondary);">We couldn't find any articles matching your active search or category parameters. Try clearing your filters.</p>
            </div>
        `;
        return;
    }

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = Math.min(startIndex + postsPerPage, filteredArticles.length);
    const currentPageArticles = filteredArticles.slice(startIndex, endIndex);

    currentPageArticles.forEach((article, index) => {
        const card = document.createElement("article");
        card.className = "blog-card";
        // Apply slight delay animation staggered for premium loading feel
        card.style.animationDelay = `${index * 0.08}s`;
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${article.image}" alt="${article.title}" class="card-img" loading="lazy">
                <span class="card-category">${article.tag}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${article.title}</h3>
                <p class="card-excerpt">${article.excerpt}</p>
                <div class="card-author-meta">
                    <div class="author-avatar">${article.authorInitials}</div>
                    <div class="author-info">
                        <span class="author-name">${article.author}</span>
                        <span class="post-date">${article.date}</span>
                    </div>
                </div>
                <div class="card-footer-action">
                    <span class="card-readtime">
                        <i class="fa-regular fa-clock"></i> ${article.readTime}
                    </span>
                    <button class="btn-text read-more-btn" data-id="${article.id}">
                        <span>Read More</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
        `;
        blogGrid.appendChild(card);
    });

    // Attach click listeners to new article card buttons
    document.querySelectorAll(".read-more-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            openArticleModal(id);
        });
    });
}

function renderPaginationControls() {
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(filteredArticles.length / postsPerPage);
    
    if (totalPages <= 1) return; // Hide pagination if single page

    // Previous Button
    const prevBtn = document.createElement("button");
    prevBtn.className = "page-btn";
    prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.setAttribute("aria-label", "Go to previous page");
    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderArticlesGrid();
            renderPaginationControls();
            scrollToGrid();
        }
    });
    paginationContainer.appendChild(prevBtn);

    // Number Buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.className = `page-btn ${currentPage === i ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.setAttribute("aria-label", `Go to page ${i}`);
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            renderArticlesGrid();
            renderPaginationControls();
            scrollToGrid();
        });
        paginationContainer.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.className = "page-btn";
    nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.setAttribute("aria-label", "Go to next page");
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderArticlesGrid();
            renderPaginationControls();
            scrollToGrid();
        }
    });
    paginationContainer.appendChild(nextBtn);
}

function scrollToGrid() {
    const gridEl = document.getElementById("filterHeader").style.display === "none" ? blogGrid : filterHeader;
    window.scrollTo({
        top: gridEl.offsetTop - 120,
        behavior: "smooth"
    });
}

// --- Article Reader Modal Controller ---
function openArticleModal(postId) {
    const post = ARTICLES.find(a => a.id === postId);
    if (!post) return;

    // Build Modal Body HTML
    let bodyHtml = `
        <div class="modal-hero-img-wrapper">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="modal-article-content">
            <span class="category-badge modal-article-badge">${post.tag}</span>
            <h1 class="modal-article-title" id="modalTitle">${post.title}</h1>
            
            <div class="modal-article-meta">
                <div class="modal-author">
                    <i class="fa-solid fa-user-astronaut"></i>
                    <span>${post.author}</span>
                </div>
                <div class="modal-date">
                    <i class="fa-regular fa-calendar-days"></i>
                    <span>${post.date}</span>
                </div>
                <div class="modal-read-time">
                    <i class="fa-regular fa-clock"></i>
                    <span>${post.readTime}</span>
                </div>
            </div>
            
            <div class="modal-article-body">
    `;

    // Process article structures (p, h3, code, quote)
    post.content.forEach(sec => {
        if (sec.type === "p") {
            bodyHtml += `<p>${sec.text}</p>`;
        } else if (sec.type === "h3") {
            bodyHtml += `<h3>${sec.text}</h3>`;
        } else if (sec.type === "quote") {
            bodyHtml += `<blockquote>${sec.text}</blockquote>`;
        } else if (sec.type === "code") {
            bodyHtml += `<pre><code>${highlightCode(sec.code)}</code></pre>`;
        }
    });

    bodyHtml += `
            </div>
        </div>
    `;

    modalBody.innerHTML = bodyHtml;
    articleModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent body scroll under modal
}

function closeArticleModal() {
    articleModal.classList.remove("active");
    document.body.style.overflow = ""; // Restore body scrolling
}

// --- Interactive Events Initializer ---
function init() {
    // 1. Dark/Light Theme Switching Engine
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        showToast(`Theme switched to ${newTheme} mode!`, "success");
    });

    // 2. Mobile Menu Toggle
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("active");
        mobileNavOverlay.classList.toggle("active");
        
        // Prevent body scrolling when menu is open
        if (mobileNavOverlay.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

    // Close mobile menu when link is clicked
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.getAttribute("data-filter");
            
            mobileMenuBtn.classList.remove("active");
            mobileNavOverlay.classList.remove("active");
            document.body.style.overflow = "";
            
            updateCategoryFilter(filter);
        });
    });

    // 3. Navigation Clicks (Desktop)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.getAttribute("data-filter");
            updateCategoryFilter(filter);
        });
    });

    // 4. Hero Section 'Read More' click handler
    if (heroReadBtn) {
        heroReadBtn.addEventListener("click", () => {
            const id = parseInt(heroReadBtn.getAttribute("data-post-id"));
            openArticleModal(id);
        });
    }

    // 5. Search Bar Inputs
    searchBtn.addEventListener("click", () => {
        activeSearchQuery = searchInput.value.trim();
        updateFilters();
    });

    searchInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            activeSearchQuery = searchInput.value.trim();
            updateFilters();
        } else if (searchInput.value.trim() === "" && activeSearchQuery !== "") {
            // Instant clear when input is empty
            activeSearchQuery = "";
            updateFilters();
        }
    });

    // 6. Sidebar Popular post clicks (linked dynamically already in builder)
    
    // 7. Footer navigation links
    document.querySelectorAll(".footer-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.getAttribute("data-filter");
            updateCategoryFilter(filter);
        });
    });

    // 8. Footer Tech Tag pills
    document.querySelectorAll(".tag-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            const tag = pill.getAttribute("data-tag");
            activeSearchQuery = tag;
            searchInput.value = tag;
            updateFilters();
            
            // Scroll to blog area
            scrollToGrid();
        });
    });

    // 9. Newsletter Form Submission with toast validation
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailVal = newsletterEmail.value.trim();
        
        if (emailVal) {
            // Mock success API submission
            showToast(`Awesome! ${emailVal} has been subscribed to NexusTech.`, "success");
            newsletterEmail.value = "";
        } else {
            showToast("Please enter a valid email address.", "error");
        }
    });

    // 10. Close Modal listeners (Close button, Escape key, backdrop click)
    modalCloseBtn.addEventListener("click", closeArticleModal);
    
    articleModal.addEventListener("click", (e) => {
        if (e.target === articleModal) {
            closeArticleModal();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && articleModal.classList.contains("active")) {
            closeArticleModal();
        }
    });

    // 11. Clear active filter banner action
    clearFilterBtn.addEventListener("click", () => {
        activeCategory = "all";
        activeSearchQuery = "";
        searchInput.value = "";
        updateFilters();
    });

    // 12. Scroll Progress indicator
    window.addEventListener("scroll", updateScrollProgress);

    // Initial render sequences
    renderCategoriesSidebar();
    renderPopularPostsSidebar();
    updateFilters(); // Performs first render of grid & pagination
}

// Start application when DOM is ready
document.addEventListener("DOMContentLoaded", init);
