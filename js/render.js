render = {
    loadFeaturedProjects() { //loads projects designated "featured"
        let i = 1;
        for (const item in projects) {
            if (i > 3) {
                return
            }
            if (projects[item].featured) {
                project = projects[item]
                let [rat1, rat2] = project.content.image.ratio.split("/").map(Number);
                let height = percentage(window.innerHeight, 60) - 40
                let width = height * rat2 / rat1
                document.getElementById(`projectImage${i}`).setAttribute("src", project.content.image.src);
                document.getElementById(`project${i}`).setAttribute("onclick", "redirect('" + project.link + "')");
                document.getElementById(`projectTitle${i}`).innerHTML = project.content.title;
                document.getElementById(`projectDescription${i}`).innerHTML = project.content.description;
                document.getElementById(`projectContent${i}`).setAttribute('style', `padding-right: 20px;width: calc(${window.innerWidth - 40}px - calc(${width}px + 20px));margin-left: calc(${width}px + 40px);`)
                document.getElementById(`projectDescription${i}`).setAttribute('style', `width: calc(${window.innerWidth - 40}px - calc(${width}px + 20px));`);
                i++;
            }
        }
    },

    loadLatestProjects(home) { //loads projects in chronological order
        let i = 1;
        if (home) { //if it is the homepage

            for (;i < 4; i++) {
                console.log(i)
                if (i == 4) {
                    return
                }
                let project = projects[Object.keys(projects)[Object.keys(projects).length - i]]
                console.log(project)
                let content = project.content;
                let [rat1, rat2] = content.image.ratio.split("/");
                let height = percentage(window.innerHeight, 60) - 40
                let width = height * rat2 / rat1
                document.getElementById(`projectImage${i}`).setAttribute("src", project.content.image.src);
                document.getElementById(`project${i}`).setAttribute("onclick", "redirect('" + project.link + "')");
                document.getElementById(`projectTitle${i}`).innerHTML = project.content.title;
                document.getElementById(`projectDescription${i}`).innerHTML = project.content.description;
                document.getElementById(`projectContent${i}`).setAttribute('style', `padding-right: 20px;width: calc(${window.innerWidth - 40}px - calc(${width}px + 20px));margin-left: calc(${width}px + 40px);`)
                document.getElementById(`projectDescription${i}`).setAttribute('style', `width: calc(${window.innerWidth - 40}px - calc(${width}px + 20px));`);
            }
        } else {
            for (const item in projects) {
                if (typeof projects[item] !== 'function') { //if it's not a function
                    project = projects[item] //setting the object
                    //creating new element
                    var parent = document.getElementById('contentWrapper');
                    let article = document.createElement('article');
                    article.id = 'project' + i
                    article.setAttribute('class', 'center link')
                    parent.appendChild(article)
                    let img = document.createElement('img');
                    img.id = 'projectImage' + i
                    img.setAttribute('class', 'left')
                    article.appendChild(img)
                    let div = document.createElement('div')
                    div.id = 'projectContent' + i
                    article.appendChild(div)
                    let h1 = document.createElement('h1')
                    h1.id = 'projectTitle' + i
                    div.appendChild(h1)
                    let p = document.createElement('p')
                    p.id = 'projectDescription' + i
                    p.setAttribute('class', 'desc')
                    div.appendChild(p)
                    let [rat1, rat2] = project.content.image.ratio.split("/");
                    let height = percentage(window.innerHeight, 60) - 40
                    let width = height * rat2 / rat1
                    document.getElementById(`projectImage${i}`).setAttribute("src", project.content.image.src);
                    document.getElementById(`project${i}`).setAttribute("onclick", "redirect('" + project.link + "')");
                    document.getElementById(`projectTitle${i}`).innerHTML = project.content.title;
                    document.getElementById(`projectDescription${i}`).innerHTML = project.content.description;
                    document.getElementById(`projectContent${i}`).setAttribute('style', `padding-right: 20px;width: calc(${window.innerWidth - 40}px - calc(${width}px + 20px));margin-left: calc(${width}px + 40px);`)
                    document.getElementById(`projectDescription${i}`).setAttribute('style', `width: calc(${window.innerWidth - 40}px - calc(${width}px + 20px));`);
                    i++
                }
            }
        }
    },
    loadBlog(home) { //loads projects in chronological order
        let i = 1;
        if (home) { //if it is the homepage
            let curBlog = blog[Object.keys(blog)[Object.keys(blog).length - 1]]
            let main = document.getElementById('blog');
            let img = document.getElementById('blogImage');
            let desc = document.getElementById('blogCont');
            let title = document.getElementById('blogTitle');
            main.setAttribute("onclick", "redirect('" + curBlog.link + "')");
            title.innerHTML = curBlog.content.title;
            desc.innerHTML = curBlog.content.text;
            if (curBlog.content.image === undefined) {
                document.getElementById('blogImage').remove()
            } else {
                img.setAttribute("src", curBlog.content.image);
            };
        } else {
            for (const item in blog) {
                if (typeof blog[item] !== 'function') { //if it's not a function
                    blog = blog[item] //setting the object
                    //creating new element
                    var parent = document.getElementById('contentWrapper');
                    let article = document.createElement('article');
                    article.id = 'blog' + i
                    article.setAttribute('class', 'center link')
                    parent.appendChild(article)
                    let img = document.createElement('img');
                    img.id = 'blogImage' + i
                    img.setAttribute('class', 'left')
                    article.appendChild(img)
                    let div = document.createElement('div')
                    div.id = 'blogContent' + i
                    article.appendChild(div)
                    let h1 = document.createElement('h1')
                    h1.id = 'blogTitle' + i
                    div.appendChild(h1)
                    let p = document.createElement('p')
                    p.id = 'blogDescription' + i
                    p.setAttribute('class', 'desc')
                    div.appendChild(p)
                    let [rat1, rat2] = blog.content.image.ratio.split("/");
                    let height = percentage(window.innerHeight, 60) - 40
                    let width = height * rat2 / rat1
                    document.getElementById(`blogImage${i}`).setAttribute("src", blog.content.image.src);
                    document.getElementById(`blog${i}`).setAttribute("onclick", "redirect('" + blog.link + "')");
                    document.getElementById(`blogTitle${i}`).innerHTML = blog.content.title;
                    document.getElementById(`blogDescription${i}`).innerHTML = blog.content.description;
                    document.getElementById(`blogContent${i}`).setAttribute('style', `padding-right: 20px;width: calc(${window.innerWidth - 40}px - calc(${width}px + 20px));margin-left: calc(${width}px + 40px);`)
                    document.getElementById(`blogDescription${i}`).setAttribute('style', `width: calc(${window.innerWidth - 40}px - calc(${width}px + 20px));`);
                    i++
                }
            }
        }
    }
};