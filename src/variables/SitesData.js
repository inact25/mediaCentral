import {navigationLink} from "./NavigationLink";
import {socialLink} from "./SocialLink";

export const siteTitle = "mediaCentral"
export const sitePartner = [{
    title: "IDCsharp.com",
    url: "https://idcsharp.com",
},
    {
        title: "Javapixa",
        url: "https://javapixa.com",
    }]


export const footerWidget1 = {
    title: "Tentang",
    item: `<p><b>${siteTitle}</b> 
                                adalah media yang menggabungkan berbagai berita indonesia 
                                dari berbagai sumber media berita.</p><p>Perlu diketahui 
                                semua konten yang berada di dalam <b>${siteTitle}</b> 
                                bukan serta merta milik <b>${siteTitle}</b> sendiri</p>`
}

export const footerWidget2 = {
    title: "Link",
    item: [{
        title: "Disclaimer",
        url: "#"
    }, {
        title: "Term of Use",
        url: "#"
    }, {
        title: "Hubungi Kami",
        url: "#"
    }, {
        title: "Tentang",
        url: "#"
    }]
}


export const footerWidget3 = {
    title: "Kategori",
    item: navigationLink
}

export const footerWidget4 = socialLink
