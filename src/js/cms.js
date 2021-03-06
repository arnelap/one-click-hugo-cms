import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import AgendaPreview from "./cms-preview-templates/agenda";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("agenda", AgendaPreview);
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("foto-impressie", HomePreview);
CMS.registerPreviewTemplate("duurzame-pedagogiek", HomePreview);
CMS.registerPreviewTemplate("kennismaken", HomePreview);
CMS.registerPreviewTemplate("ontstaansgeschiedenis", HomePreview);
CMS.registerPreviewTemplate("openingstijden", HomePreview);
CMS.registerPreviewTemplate("peuterpedagogie", HomePreview);
CMS.registerPreviewTemplate("peuterspeelgroep", HomePreview);
CMS.registerPreviewTemplate("reviews-van-ouders", HomePreview);
CMS.registerPreviewTemplate("tarieven", HomePreview);
CMS.registerPreviewTemplate("vacatures", HomePreview);
CMS.registerPreviewTemplate("veiligheid-en-kwaliteit", HomePreview);
CMS.registerPreviewTemplate("vve-subsidie", HomePreview);
CMS.registerPreviewTemplate("post", HomePreview);
CMS.registerPreviewTemplate("contact", HomePreview);
CMS.init();
