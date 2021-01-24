import React from 'react';
import {siteLink, siteTitle} from "./SitesData";
import {navigationLink} from "./NavigationLink";
import {socialLink} from "./SocialLink";

const FooterWidget1 = () => {
    return (
        <div>
            <p><b>{siteTitle} </b>
                adalah media yang menggabungkan berbagai berita indonesia
                dari berbagai sumber media berita.</p><p>Perlu diketahui
            semua konten yang berada di dalam <b>{siteTitle} </b>
            bukan serta merta milik <b>{siteTitle}</b> sendiri</p>
        </div>
    );
};

const FooterWidget2 = () => {
    return (
        <div>
            {siteLink.map(data =>
                <li><a href={data.url}>{data.title}</a></li>
            )}
        </div>
    );
};

const FooterWidget3 = () => {
    return (
        <div>
            {navigationLink.map(data =>
                <li><a href={data.url}>{data.title}</a></li>
            )}
        </div>
    );
};

const FooterWidget4 = () => {
    return (
        <div className="row">
            {socialLink.map(linkData =>
                <div className="col"><a href={linkData.url}><h2
                    className="text-white social-icon">{linkData.icon}</h2></a></div>
            )}
        </div>
    )
}

export const FooterData = [{
    title: "Tentang",
    item: <FooterWidget1/>
}, {
    title: "Link",
    item: <FooterWidget2/>
}, {
    title: "Kategori",
    item: <FooterWidget3/>
}, {
    title: "Social",
    item: <FooterWidget4/>
}]
