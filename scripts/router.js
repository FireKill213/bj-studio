class Router {
    constructor() {
        this.routes = {};
        this.initRouter();
    }

    initRouter() {
        this.addRoute('/', 'home.html');
        this.addRoute('/projects', 'projects.html');
        this.addRoute('/contact', 'contact.html');

        window.addEventListener('popstate', () => this.handleRouting());
        document.addEventListener('DOMContentLoaded', () => this.handleRouting());
        document.addEventListener('click', (e) => this.handleLinkClick(e));
    }

    addRoute(path, template) {
        this.routes[path] = template;
    }

    async loadTemplate(url) {
        try {
            const response = await fetch(`/pages/${url}`);
            if (!response.ok) throw new Error(`Failed to load ${url}`);
            return await response.text();
        } catch (error) {
            console.error(error);
            return '<h1>Page not found</h1>';
        }
    }

    async handleRouting() {
        document.getElementById('main-content').innerHTML = '<div class="loader"></div>';
        const path = window.location.pathname;
        const route = Object.keys(this.routes).find(r => r === path) || '/';
        
        const html = await this.loadTemplate(this.routes[route]);
        this.updateContent(html);
        this.updateActiveLink(path);
    }

    updateContent(html) {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = html;

        document.querySelectorAll('script[data-route-script]').forEach(script => {
            script.parentNode.removeChild(script);
        });
    
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        tempDiv.querySelectorAll('script').forEach(oldScript => {
            const newScript = document.createElement('script');
            
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
    
            if (!oldScript.src) {
                newScript.textContent = oldScript.textContent;
            }
            
            document.body.appendChild(newScript);
        });
    
        window.dispatchEvent(new CustomEvent('route-changed'));
        document.title = tempDiv.querySelector('title')?.textContent || 'BJ-Studio';
    }

    updateActiveLink(currentPath) {
        document.querySelectorAll('#nav-bar a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    handleLinkClick(e) {
        const link = e.target.closest('a');
        if (link && !link.closest('#nav-bar')) return;
        
        if (link) {
            e.preventDefault();
            const path = link.getAttribute('href');
            history.pushState({}, '', path);
            this.handleRouting();
        }
    }
}

new Router();