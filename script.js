unlayer.init({
  id: 'editor',
  displayMode: 'email',
  appearance: {
    theme: 'dark',
    panels: {
      tools: {
        dock: 'left'
      }
    }
  }
})

function updateTextArea() {
  // Cleanup disabled
  unlayer.exportHtml(
    function (data) {
      let htmlInput = document.getElementById("exported_html_cleanup_disabled");
      htmlInput.value = data.html;

      let jsonInput = document.getElementById("exported_json");
      jsonInput.value = JSON.stringify(data.design);
    },
    { cleanup: false }
  );

  // Cleanup enabled
  unlayer.exportHtml(
    function (data) {
      let jsonInput = document.getElementById("exported_html_cleanup_enabled");
      jsonInput.value = data.html;
    },
    { cleanup: true }
  );
}

unlayer.addEventListener("design:loaded", function (data) {
  updateTextArea();
});

unlayer.addEventListener("design:updated", function (data) {
  updateTextArea();
});

function loadTemplate(id) {
    if (id == 1) {
        unlayer.loadDesign({
                "body": {
                    "id": "sLieBV_M2v",
                    "rows": [{
                        "id": "liK7Jt8my1",
                        "cells": [2, 1],
                        "columns": [{
                            "id": "-sdGRE1lap",
                            "contents": [{
                                "id": "9FjDaNAzIC",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698954673479-The%2BCollective-logos_main-gold+%282%29.png",
                                        "width": 1921,
                                        "height": 1081,
                                        "maxWidth": "34%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "left",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_2",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_2",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "MeETa7QiLm",
                            "contents": [{
                                "id": "NieEsIDe64",
                                "type": "text",
                                "values": {
                                    "containerPadding": "20px 10px 20px 0px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": false,
                                        "linkColor": "#e5b466",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": false,
                                        "linkHoverUnderline": true,
                                        "body": false
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_1",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><a rel=\"noopener\" href=\"https://www.thecondocollection.ca/\" target=\"_blank\" data-u-link-value=\"eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vd3d3LnRoZWNvbmRvY29sbGVjdGlvbi5jYS8iLCJ0YXJnZXQiOiJfYmxhbmsifX0=\"><span style=\"color: #e5b466; line-height: 14px;\">View the other projects in our collection</span></a></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "10px",
                                            "textAlign": "center",
                                            "hideMobile": true,
                                            "containerPadding": "0px 10px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_3",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#ffffff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_2",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\"><span style=\"color: #e5b466; line-height: 16.8px;\">View Our Other Projects</span></p>"
                        }
                    }, {
                        "id": "EBNw8F4F4h",
                        "cells": [1],
                        "columns": [{
                            "id": "wOUq266AL4",
                            "contents": [{
                                "id": "nWqy67VxA9",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "0px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "30px 10px 10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_1",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "70px 10px 10px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "YMrSnOAt7R",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px 0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700456929211-eversley-estates-logo_1.png",
                                        "width": 640,
                                        "height": 345,
                                        "id": 17495362,
                                        "preview": {
                                            "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700188028268-8+TEMPLE+Logo+Copper.png",
                                            "width": 800,
                                            "height": 116
                                        },
                                        "maxWidth": "61%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": ""
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_1",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "sKZyKD3Mc9",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 20px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontWeight": 400,
                                    "fontSize": "26px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_2",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"background-color: #4a3383; line-height: 36.4px;\"><strong>  King </strong><span style=\"color: #e5b466; line-height: 36.4px;\">City </span></span></p>\n<p style=\"line-height: 140%;\"><span style=\"background-color: #4a3383; line-height: 36.4px;\"><strong>  2026</strong> <span style=\"color: #e5b466; line-height: 36.4px;\">Closing</span></span></p>\n<div title=\"\">\n<div>\n<p style=\"line-height: 140%;\"><span style=\"background-color: #4a3383; line-height: 36.4px;\"><strong>  Floorplans</strong> <span style=\"color: #e5b466; line-height: 36.4px;\">PDF </span></span></p>\n</div>\n</div>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "18px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "-hlcmENuBh",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "0px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "40px 0px 0px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_2",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "30px 10px 10px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "dAM6GREcx_",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontWeight": 400,
                                    "fontSize": "22px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_76",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 30.8px; background-color: #4a3383;\"><strong>  Townhouses Starting From  </strong></span></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "18px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "_ZKe4sMCCH",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 40px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontWeight": 700,
                                    "fontSize": "51px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_3",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 71.4px; background-color: #4a3383;\"> $1,200,000 </span></p>",
                                    "_override": {
                                        "mobile": {
                                            "color": "#4a3383",
                                            "fontSize": "32px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_4",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700455791511-image-022_1.jpg",
                                "width": 640,
                                "height": 573,
                                "fullWidth": false,
                                "size": "custom",
                                "repeat": "no-repeat",
                                "position": "bottom-center",
                                "customPosition": ["50%", "100%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_3",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "6vDrHMxMLC",
                        "cells": [33.34, 66.66],
                        "columns": [{
                            "id": "dvFjK7GxN5",
                            "contents": [{
                                "id": "O2_pmEKhwW",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700455208795-Eversley-Estates-Kitchen_1.png",
                                        "width": 800,
                                        "height": 517
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_43",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "IOOl-i9tpP",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700455349141-445226.png",
                                        "width": 801,
                                        "height": 565
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_41",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_81",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": ""
                            }
                        }, {
                            "id": "G3mjIWtU4i",
                            "contents": [{
                                "id": "YxHRaR7AB9",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700457497224-99353.jpg",
                                        "width": 654,
                                        "height": 442,
                                        "maxWidth": "100%",
                                        "autoWidth": true
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_40",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_82",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_47",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "ZEebRFYJxy",
                        "cells": [46.09, 53.91],
                        "columns": [{
                            "id": "My-Sa9MwlD",
                            "contents": [{
                                "id": "gm1V7Bwt_X",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700457273176-image-removebg-preview+%281%29+%282%29.png",
                                        "width": 603,
                                        "height": 414,
                                        "maxWidth": "100%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_38",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_76",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#ffffff"
                            }
                        }, {
                            "id": "ALqHop_9cB",
                            "contents": [{
                                "id": "dppgNvK4J3",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "color": "#000000",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_72",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<h2>Where Elegance Meets Modern Living</h2>\n<p style=\"line-height: 140%;\">Situated in one of King City's most coveted areas, Eversley Estates is surrounded by lush landscapes, prestigious schools, and exclusive amenities, making it a top choice for discerning families and professionals.</p>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_77",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#ffffff"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_44",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "mguEthFCJQ",
                        "cells": [2, 1],
                        "columns": [{
                            "id": "yzmtIG5qU9",
                            "contents": [{
                                "id": "jV6h0upZnA",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700455193142-Eversley-Estates-Dining-Room_1.png",
                                        "width": 800,
                                        "height": 444,
                                        "maxWidth": "100%",
                                        "autoWidth": true
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_42",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_83",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": ""
                            }
                        }, {
                            "id": "HdUdD2QK_g",
                            "contents": [{
                                "id": "_YTWNfszVE",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700456004745-211100.jpg",
                                        "width": 443,
                                        "height": 496
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_44",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_84",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_48",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "iCw5YVEKm8",
                        "cells": [1],
                        "columns": [{
                            "id": "2YtgVggCUc",
                            "contents": [{
                                "id": "hM0JaLDW8D",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700457072147-eversley-estates-siteplan.jpg",
                                        "width": 640,
                                        "height": 359
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_39",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_80",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_46",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "aQ4wb0xlhw",
                        "cells": [1],
                        "columns": [{
                            "id": "cYMfxtDPKu",
                            "contents": [{
                                "id": "DNSJu-OT4i",
                                "type": "button",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "href": {
                                        "name": "web",
                                        "values": {
                                            "href": "https://lakevu.thecondocollection.ca/",
                                            "target": "_blank"
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "buttonColors": {
                                        "color": "#4a3383",
                                        "backgroundColor": "#ffffff",
                                        "hoverColor": "#FFF",
                                        "hoverBackgroundColor": "#3AAEE0"
                                    },
                                    "size": {
                                        "autoWidth": false,
                                        "width": "75%"
                                    },
                                    "fontSize": "20px",
                                    "textAlign": "center",
                                    "lineHeight": "120%",
                                    "padding": "5px 60px",
                                    "border": {},
                                    "borderRadius": "4px",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_button_2",
                                        "htmlClassNames": "u_content_button"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<span style=\"display: block; padding: 10px 25px; line-height: 16.8px;\"><strong><span style=\"line-height: 16.8px;\">DOWNLOAD BROCHURE</span></strong></span>",
                                    "_override": {
                                        "mobile": {
                                            "size": {
                                                "width": "100%",
                                                "autoWidth": false
                                            }
                                        }
                                    },
                                    "calculatedWidth": 465,
                                    "calculatedHeight": 47
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_9",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "10px 0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#fff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_7",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "XCGwn-t5_p",
                        "cells": [1],
                        "columns": [{
                            "id": "9LupLwneeB",
                            "contents": [{
                                "id": "32exqtl4of",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "20px 10px",
                                    "anchor": "",
                                    "headingType": "h2",
                                    "fontSize": "23px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "110%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_5",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p>Get in Touch With an Eversley Estate <br /><strong>Pre-Construction Expert</strong> Now</p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "32px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_58",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_34",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "Bc_mIAW6Z8",
                        "cells": [1, 1, 1],
                        "columns": [{
                            "id": "q4NTT7knrs",
                            "contents": [{
                                "id": "StkyzTI7dh",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px 50px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698971048137-dan.png",
                                        "width": 600,
                                        "height": 600
                                    },
                                    "textAlign": "left",
                                    "altText": "Image",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_25",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "0px 70px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "jxe_6cUWnX",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "fontSize": "16px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_77",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><strong><span style=\"line-height: 22.4px; color: #ffffff;\">Daniel </span></strong><span style=\"line-height: 22.4px; color: #ffffff;\">Foti</span></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "gzKmhT9zmC",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#e5b466",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_55",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Broker</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "L1PWVZTJ_q",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_79",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">D|G Realty Team <strong>Re/Max Experts</strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_55",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "3px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "hQViQqbAc9",
                            "contents": [{
                                "id": "EFveykpaK4",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px 50px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698971042230-matt.png",
                                        "width": 600,
                                        "height": 600
                                    },
                                    "textAlign": "center",
                                    "altText": "Image",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_26",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "0px 70px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "T6eiaurWJQ",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontSize": "16px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_54",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><strong><span style=\"line-height: 22.4px; color: #ffffff;\">Matthew </span></strong><span style=\"line-height: 22.4px; color: #ffffff;\">Campoli</span></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "25px",
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "y8BHFXtWYJ",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#e5b466",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_51",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Sales Representative</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "Binxp8s-dq",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_53",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">RSDNCY. Group | <strong>EXP Realty</strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_56",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "Y5PgHcrBOE",
                            "contents": [{
                                "id": "dpdBnALJBC",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px 50px",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700458140334-profile-pic+%2827%29+%281%29.png",
                                        "width": 600,
                                        "height": 600
                                    },
                                    "textAlign": "left",
                                    "altText": "Image",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_45",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "0px 70px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "lTvCfd_WAL",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "16px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_50",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><strong>Gianpaolo</strong> Caporiccio</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "iEakv0D4W8",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "fontSize": "12px",
                                    "color": "#e5b466",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_78",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Broker</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "T4R7O3Vbal",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_56",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">D|G Realty Team <strong>Re/Max Experts</strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "backgroundColor": "#4a3383",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_85",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#fff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_32",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "1qw0d5DPQx",
                        "cells": [1],
                        "columns": [{
                            "id": "eNLRY2LaO4",
                            "contents": [{
                                "id": "0Uezxmu-kZ",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "2px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#e5b466"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_15",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "95qaIu4cHh",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698954673479-The%2BCollective-logos_main-gold+%282%29.png",
                                        "width": 1921,
                                        "height": 1081,
                                        "maxWidth": "29%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "https://www.thecondocollection.ca/",
                                            "target": "_blank"
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_31",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "src": {
                                                "maxWidth": "72%",
                                                "autoWidth": false
                                            }
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_63",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_37",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "headers": [],
                    "footers": [],
                    "values": {
                        "popupPosition": "center",
                        "popupWidth": "600px",
                        "popupHeight": "auto",
                        "borderRadius": "10px",
                        "contentAlign": "center",
                        "contentVerticalAlign": "center",
                        "contentWidth": 640,
                        "fontFamily": {
                            "label": "Tahoma",
                            "value": "tahoma,arial,helvetica,sans-serif",
                            "url": "",
                            "weights": null,
                            "defaultFont": true
                        },
                        "textColor": "#000000",
                        "popupBackgroundColor": "#FFFFFF",
                        "popupBackgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": "no-repeat",
                            "size": "cover",
                            "position": "center"
                        },
                        "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
                        "popupCloseButton_position": "top-right",
                        "popupCloseButton_backgroundColor": "#DDDDDD",
                        "popupCloseButton_iconColor": "#000000",
                        "popupCloseButton_borderRadius": "0px",
                        "popupCloseButton_margin": "0px",
                        "popupCloseButton_action": {
                            "name": "close_popup",
                            "attrs": {
                                "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                            }
                        },
                        "backgroundColor": "transparent",
                        "backgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": "no-repeat",
                            "size": "custom",
                            "position": "center"
                        },
                        "preheaderText": "",
                        "linkStyle": {
                            "body": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "_meta": {
                            "htmlID": "u_body",
                            "htmlClassNames": "u_body"
                        }
                    }
                },
                "schemaVersion": 16
            },
        );
      }

    if (id == 2) {
        unlayer.loadDesign({
                "body": {
                    "id": "sLieBV_M2v",
                    "rows": [{
                        "id": "liK7Jt8my1",
                        "cells": [2, 1],
                        "columns": [{
                            "id": "-sdGRE1lap",
                            "contents": [{
                                "id": "9FjDaNAzIC",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698954673479-The%2BCollective-logos_main-gold+%282%29.png",
                                        "width": 1921,
                                        "height": 1081,
                                        "maxWidth": "48%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "left",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_2",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_2",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "MeETa7QiLm",
                            "contents": [{
                                "id": "NieEsIDe64",
                                "type": "text",
                                "values": {
                                    "containerPadding": "20px 10px 20px 0px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": false,
                                        "linkColor": "#e5b466",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": false,
                                        "linkHoverUnderline": true,
                                        "body": false
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_1",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><a rel=\"noopener\" href=\"https://www.thecondocollection.ca/\" target=\"_blank\" data-u-link-value=\"eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vd3d3LnRoZWNvbmRvY29sbGVjdGlvbi5jYS8iLCJ0YXJnZXQiOiJfYmxhbmsifX0=\"><span style=\"color: #e5b466; line-height: 14px;\">View the other projects in our collection</span></a></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "10px",
                                            "textAlign": "center",
                                            "hideMobile": true,
                                            "containerPadding": "0px 10px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_3",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#ffffff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_2",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\"><span style=\"color: #e5b466; line-height: 16.8px;\">View Our Other Projects</span></p>"
                        }
                    }, {
                        "id": "aY8D5Aiav-",
                        "cells": [1],
                        "columns": [{
                            "id": "tszKBlUaLV",
                            "contents": [{
                                "id": "YMrSnOAt7R",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px 0px 5px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698961012839-45669+JDD+LV2+Logo+WHITE+RGB.png",
                                        "width": 1036,
                                        "height": 250,
                                        "maxWidth": "62%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": ""
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_1",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "qI46xk-dX4",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 15px 20px",
                                    "anchor": "",
                                    "fontSize": "17px",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_18",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 21px; color: #e5b466;\"><strong>IN BARRIE, ONTARIO</strong></span></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "15px",
                                            "containerPadding": "0px 10px 15px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_5",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_4",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "EBNw8F4F4h",
                        "cells": [1],
                        "columns": [{
                            "id": "wOUq266AL4",
                            "contents": [{
                                "id": "nWqy67VxA9",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "0px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "150px 10px 10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_1",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "70px 10px 10px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "sKZyKD3Mc9",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 20px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontWeight": 400,
                                    "fontSize": "22px",
                                    "color": "#4a3383",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_2",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 30.8px;\"><strong>Starting From</strong></span></p>",
                                    "hideMobile": false,
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "18px"
                                        }
                                    }
                                }
                            }, {
                                "id": "_ZKe4sMCCH",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 40px 20px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontWeight": 700,
                                    "fontSize": "51px",
                                    "color": "#4a3383",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_3",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 71.4px;\">$499,900</span></p>",
                                    "hideMobile": false,
                                    "_override": {
                                        "mobile": {
                                            "color": "#4a3383",
                                            "fontSize": "32px"
                                        }
                                    }
                                }
                            }, {
                                "id": "-hlcmENuBh",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "0px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "80px 10px 10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_2",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "30px 10px 10px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_4",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698955904110-Birdeye+close+up.png",
                                "fullWidth": false,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center",
                                "width": 1443,
                                "height": 1356,
                                "customPosition": ["50%", "50%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_3",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "szRel71M9q",
                        "cells": [1, 1, 1],
                        "columns": [{
                            "id": "-kpdP2Cf90",
                            "contents": [{
                                "id": "ruD8Ro2200",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698956683119-627273.png",
                                        "width": 1443,
                                        "height": 1356
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_12",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_31",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "T2D8gHEzmz",
                            "contents": [{
                                "id": "I5U0Ia_8-K",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698956666845-327140.png",
                                        "width": 1443,
                                        "height": 1356
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_13",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_32",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "epNTldE9-C",
                            "contents": [{
                                "id": "IMSfrQEPa7",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698956653663-512504.png",
                                        "width": 714,
                                        "height": 714
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_14",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_33",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_21",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "hideMobile": true
                                }
                            }
                        }
                    }, {
                        "id": "1CHYUN99VN",
                        "cells": [1],
                        "columns": [{
                            "id": "z_waPTp9wc",
                            "contents": [{
                                "id": "UdIiAVW5xM",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px 10px 0px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "29px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_59",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">LAKEVU3 CONDO</p>"
                                }
                            }, {
                                "id": "vQSvZnvSq9",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "37px",
                                    "color": "#e5b466",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_61",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">VIP BROKER EVENT</p>"
                                }
                            }, {
                                "id": "Sm1n50ranD",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "1px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBBBBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_3",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_64",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_38",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "IykPNXJv3F",
                        "cells": [1, 2],
                        "columns": [{
                            "id": "qP_eKfwUau",
                            "contents": [{
                                "id": "w7cPvNGpzD",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "61px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_62",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">TWO DAYS ONLY</p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "37px",
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_66",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "cSkIv6TsZm",
                            "contents": [{
                                "id": "jVbdgTJEEs",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 10px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "35px",
                                    "color": "#e5b466",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_63",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Now or Never!</p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "31px",
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "6car2hP7ag",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "18px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_64",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><strong>SAT &amp; SUN</strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "-HiW4ILSh1",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontWeight": 400,
                                    "fontSize": "18px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_65",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">November 4 - 5</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "G2f58c4fL3",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontWeight": 400,
                                    "fontSize": "18px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_66",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">12pm - 5pm</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "-MbY4RfqNJ",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "1px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBBBBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "10px 10px 10px 0px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_13",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "4WJdhNQsaC",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontWeight": 400,
                                    "fontSize": "18px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_67",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><strong><span style=\"color: #ffffff; line-height: 25.2px;\">11 Lakeside Terrace <br />Barrie, Ontario<br /></span></strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "XXjlS8EQym",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_7",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 19.6px; color: #e5b466;\">Snacks &amp; refreshments will be provided</span></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "13px",
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_67",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_40",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "aQ4wb0xlhw",
                        "cells": [1],
                        "columns": [{
                            "id": "cYMfxtDPKu",
                            "contents": [{
                                "id": "a8FjOeF14Z",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "1px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBBBBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_4",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "hideMobile": true
                                        }
                                    }
                                }
                            }, {
                                "id": "DNSJu-OT4i",
                                "type": "button",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "href": {
                                        "name": "web",
                                        "values": {
                                            "href": "https://lakevu.thecondocollection.ca/",
                                            "target": "_blank"
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "buttonColors": {
                                        "color": "#4a3383",
                                        "backgroundColor": "#ffffff",
                                        "hoverColor": "#FFF",
                                        "hoverBackgroundColor": "#3AAEE0"
                                    },
                                    "size": {
                                        "autoWidth": false,
                                        "width": "75%"
                                    },
                                    "fontSize": "14px",
                                    "textAlign": "center",
                                    "lineHeight": "120%",
                                    "padding": "5px 60px",
                                    "border": {},
                                    "borderRadius": "4px",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_button_2",
                                        "htmlClassNames": "u_content_button"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<span style=\"display: block; padding: 10px 25px; line-height: 16.8px;\"><strong><span style=\"line-height: 16.8px;\">REGISTER NOW!</span></strong></span>",
                                    "_override": {
                                        "mobile": {
                                            "size": {
                                                "width": "100%",
                                                "autoWidth": false
                                            }
                                        }
                                    },
                                    "calculatedWidth": 435,
                                    "calculatedHeight": 47
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_9",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px 0px 10px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#fff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_7",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "1zoMnP0Ti6",
                        "cells": [1],
                        "columns": [{
                            "id": "odbNmTb7eB",
                            "contents": [{
                                "id": "kzjVTjAMRH",
                                "type": "text",
                                "values": {
                                    "containerPadding": "20px 30px 10px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "19px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_20",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"> </p>\n<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word;\"><span style=\"color: #4a3383; line-height: 26.6px;\">VIP BROKER EVENT<strong> INCENTIVES</strong></span></h1>",
                                    "hideMobile": false,
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "26px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_34",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#fff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_22",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "jRGWT-lAn_",
                        "cells": [1, 2],
                        "columns": [{
                            "id": "aoHeoMUHlq",
                            "contents": [{
                                "id": "i4TZD1P4RV",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698984052563-1698965149851-car-park.png",
                                        "width": 70,
                                        "height": 70,
                                        "maxWidth": "41%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "right",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_15",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "src": {
                                                "maxWidth": "28%",
                                                "autoWidth": false
                                            },
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_38",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }, {
                            "id": "CjPYRlQdmf",
                            "contents": [{
                                "id": "1kSu9LFM47",
                                "type": "text",
                                "values": {
                                    "containerPadding": "30px 10px 10px",
                                    "anchor": "",
                                    "fontSize": "25px",
                                    "color": "#000",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_21",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; background-color: #4a3383;\"><strong><span style=\"line-height: 35px; color: #ffffff;\">   FREE PARKING   </span></strong></span><span style=\"color: #000000; line-height: 35px;\"><span style=\"line-height: 35px;\"><span style=\"line-height: 35px;\">  </span></span><span style=\"line-height: 35px; color: #4a3383;\"><span style=\"line-height: 35px;\"><span style=\"text-decoration: line-through; line-height: 35px;\">$39,900</span></span></span></span></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center",
                                            "containerPadding": "0px 10px 10px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_39",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_24",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "ZEP5Z5LEMJ",
                        "cells": [1, 2],
                        "columns": [{
                            "id": "f7jj2FuXWN",
                            "contents": [{
                                "id": "pJQ39PrSKe",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698984062397-1698965161051-legal-document.png",
                                        "width": 70,
                                        "height": 70,
                                        "maxWidth": "41%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "right",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_16",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "src": {
                                                "maxWidth": "28%",
                                                "autoWidth": false
                                            },
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_40",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px 0px 20px",
                                "borderRadius": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }, {
                            "id": "V23tGstOkw",
                            "contents": [{
                                "id": "EtY_Jb-PEm",
                                "type": "text",
                                "values": {
                                    "containerPadding": "30px 10px 10px",
                                    "anchor": "",
                                    "fontSize": "25px",
                                    "color": "#000",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_23",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; background-color: #4a3383;\"><strong><span style=\"line-height: 35px; color: #ffffff;\"> FREE LAWYER   REVIEW </span></strong></span></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center",
                                            "containerPadding": "0px 10px 10px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_41",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_25",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "136mhjdUme",
                        "cells": [1, 1],
                        "columns": [{
                            "id": "VdDuMCGtUz",
                            "contents": [{
                                "id": "wNOB7T9BEp",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698984319003-1698965167297-10-percent.png",
                                        "width": 70,
                                        "height": 70,
                                        "maxWidth": "26%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_32",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "ogHADyMHg2",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "fontSize": "25px",
                                    "color": "#843fa1",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_68",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">ONLY 10%</span></strong></span></p>"
                                }
                            }, {
                                "id": "6MaPg04q-w",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px 20px",
                                    "anchor": "",
                                    "fontSize": "15px",
                                    "color": "#4a3383",
                                    "textAlign": "center",
                                    "lineHeight": "100%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_69",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 100%;\"><span style=\"line-height: 15px;\"><strong>Deposit</strong> Before Occupancy</span></p>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_68",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "_override": {
                                    "mobile": {
                                        "padding": "0px 0px 10px"
                                    }
                                },
                                "borderRadius": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }, {
                            "id": "jKvD9wi_xT",
                            "contents": [{
                                "id": "iQmMMEsgMM",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698984310502-1698965172111-data-exchange.png",
                                        "width": 70,
                                        "height": 70,
                                        "maxWidth": "26%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_33",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "Ns9OxkRRsd",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "fontSize": "25px",
                                    "color": "#843fa1",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_70",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">FREE ASSIGNMENT</span></strong></span></p>"
                                }
                            }, {
                                "id": "JCfKKdKi5Z",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px 20px",
                                    "anchor": "",
                                    "fontSize": "15px",
                                    "color": "#4a3383",
                                    "textAlign": "center",
                                    "lineHeight": "100%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_71",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 100%;\"><em><span style=\"line-height: 15px;\">* Legal Fees Apply</span></em></p>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_69",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_41",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "Q0pAlPDPhG",
                        "cells": [1, 1],
                        "columns": [{
                            "id": "0GeWWLVSMN",
                            "contents": [{
                                "id": "_E-WCzQVI3",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "1px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBBBBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_6",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "KFdzMT7qe1",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698984303142-1698965199851-deal.png",
                                        "width": 70,
                                        "height": 70,
                                        "maxWidth": "26%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_21",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "ud8Tv4HMxF",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "fontSize": "25px",
                                    "color": "#843fa1",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_31",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">RIGHT TO LEASE</span></strong></span></p>"
                                }
                            }, {
                                "id": "KudnK6wCa4",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px 20px",
                                    "anchor": "",
                                    "fontSize": "15px",
                                    "color": "#4a3383",
                                    "textAlign": "center",
                                    "lineHeight": "100%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_32",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 100%;\"><span style=\"line-height: 15px;\"><strong>Deposit</strong> Before Occupancy</span></p>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_49",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px 0px 30px",
                                "_override": {
                                    "mobile": {
                                        "padding": "0px 0px 10px"
                                    }
                                },
                                "borderRadius": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }, {
                            "id": "ND4RuWWT9b",
                            "contents": [{
                                "id": "gvfr7A3_tI",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "1px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBBBBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_7",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "hideMobile": true
                                        }
                                    }
                                }
                            }, {
                                "id": "VyaCwU--OJ",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698984287001-1698965193214-hand.png",
                                        "width": 70,
                                        "height": 70,
                                        "maxWidth": "26%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_22",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "qyZlwZfsOi",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "fontSize": "25px",
                                    "color": "#843fa1",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_33",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">$8,500</span></strong></span></p>"
                                }
                            }, {
                                "id": "cuMvb3JdQs",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px 20px",
                                    "anchor": "",
                                    "fontSize": "15px",
                                    "color": "#4a3383",
                                    "textAlign": "center",
                                    "lineHeight": "100%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_34",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 100%;\"><span style=\"line-height: 15px;\"><strong>Capped </strong>Development Charges</span></p>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_50",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px 0px 10px",
                                "_override": {
                                    "mobile": {
                                        "padding": "0px 0px 30px"
                                    }
                                },
                                "borderRadius": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_27",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "m8CqChbP4K",
                        "cells": [1],
                        "columns": [{
                            "id": "imu14wkvcR",
                            "contents": [{
                                "id": "L8PxPdZw3U",
                                "type": "text",
                                "values": {
                                    "containerPadding": "30px 10px 0px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "17px",
                                    "color": "#000000",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_36",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; overflow-wrap: break-word;\"><span style=\"color: #e5b466; line-height: 23.8px;\"><strong>BUY A UNIT AT</strong></span></h1>"
                                }
                            }, {
                                "id": "q36hQkECes",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "23px",
                                    "color": "#000000",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_39",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; overflow-wrap: break-word;\"><span style=\"color: #4a3383; line-height: 32.2px;\"><strong>LAKEVU3 CONDO</strong></span></h1>"
                                }
                            }, {
                                "id": "ADU9C9ONnf",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "14px",
                                    "color": "#e5b466",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_40",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; overflow-wrap: break-word;\">AND RECIEVE AN</h1>"
                                }
                            }, {
                                "id": "kdhDwJUDM6",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px",
                                    "anchor": "",
                                    "fontWeight": 700,
                                    "fontSize": "61px",
                                    "color": "#000000",
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_38",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">iPHONE</p>"
                                }
                            }, {
                                "id": "uGOvAGFWlQ",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px 0px 0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698962779722-hero_sml_2x+%281%29+%281%29.png",
                                        "width": 1468,
                                        "height": 780
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_23",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_51",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": "#ffffff"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#fff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_28",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "WMvf5mTbHJ",
                        "cells": [1],
                        "columns": [{
                            "id": "Qql2QksRzh",
                            "contents": [{
                                "id": "0rLjzb9a1B",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698962845998-6.png",
                                        "width": 1443,
                                        "height": 1356
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_24",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_52",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_29",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "ygHlSp5c5c",
                        "cells": [1],
                        "columns": [{
                            "id": "JWFux1Wk1u",
                            "contents": [{
                                "id": "aX5p_ZMS2P",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "0px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBBBBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "15px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_11",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "qhFZEdNrld",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px 10px 0px",
                                    "anchor": "",
                                    "fontSize": "71px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "100%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_45",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 100%;\">Where</p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "38px"
                                        }
                                    }
                                }
                            }, {
                                "id": "Fgu1wiWxv2",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px",
                                    "anchor": "",
                                    "fontSize": "71px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "100%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_46",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 100%;\"><strong><span style=\"line-height: 71px; color: #4a3383;\">Joy</span></strong> Meets the Water's Edge</p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "38px"
                                        }
                                    }
                                }
                            }, {
                                "id": "OXrHpbn8JS",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "0px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBBBBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "15px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_12",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "4Xj4PRomJ0",
                                "type": "button",
                                "values": {
                                    "containerPadding": "10px 10px 20px",
                                    "anchor": "",
                                    "href": {
                                        "name": "web",
                                        "values": {
                                            "href": "https://lakevu.thecondocollection.ca/",
                                            "target": "_blank"
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "buttonColors": {
                                        "color": "#ffffff",
                                        "backgroundColor": "#4a3383",
                                        "hoverColor": "#FFF",
                                        "hoverBackgroundColor": "#3AAEE0"
                                    },
                                    "size": {
                                        "autoWidth": true,
                                        "width": "100%"
                                    },
                                    "fontSize": "14px",
                                    "textAlign": "center",
                                    "lineHeight": "120%",
                                    "padding": "5px 60px",
                                    "border": {},
                                    "borderRadius": "4px",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_button_4",
                                        "htmlClassNames": "u_content_button"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<span style=\"display: block; padding: 10px 25px; line-height: 16.8px;\"><strong><span style=\"line-height: 16.8px;\">REGISTER NOW!</span></strong></span>",
                                    "_override": {
                                        "mobile": {
                                            "size": {
                                                "width": "100%",
                                                "autoWidth": false
                                            }
                                        }
                                    },
                                    "calculatedWidth": 279,
                                    "calculatedHeight": 47
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_53",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#e5b466"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_30",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "3u_Retef9k",
                        "cells": [1],
                        "columns": [{
                            "id": "1ihqynXbtj",
                            "contents": [{
                                "id": "PXcXAoPJrO",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698987279571-image+%281%29.png",
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "https://drive.google.com/file/d/1Ibyg1rpIQNvVjFGp8m55y7l771qQydcx/view?usp=sharing",
                                            "target": "_blank"
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_11",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_29",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#ffffff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_19",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "RruAHoihl3",
                        "cells": [1],
                        "columns": [{
                            "id": "D1qO2j6Z_W",
                            "contents": [{
                                "id": "_yjwZ2NmLr",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698968854670-3.png",
                                        "width": 1443,
                                        "height": 1356
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_27",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_59",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_35",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "XCGwn-t5_p",
                        "cells": [1],
                        "columns": [{
                            "id": "9LupLwneeB",
                            "contents": [{
                                "id": "32exqtl4of",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "20px 10px",
                                    "anchor": "",
                                    "headingType": "h2",
                                    "fontSize": "38px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "110%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_5",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p>Get in Touch With a LakeVu3 <strong>Pre-Construction Expert</strong> Now</p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "32px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_58",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_34",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "Bc_mIAW6Z8",
                        "cells": [1, 1],
                        "columns": [{
                            "id": "q4NTT7knrs",
                            "contents": [{
                                "id": "StkyzTI7dh",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px 50px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698971048137-dan.png",
                                        "width": 600,
                                        "height": 600
                                    },
                                    "textAlign": "left",
                                    "altText": "Image",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_25",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "0px 70px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "lTvCfd_WAL",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "24px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_50",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><strong><span style=\"line-height: 35px; color: #ffffff;\">Daniel Foti</span></strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "gzKmhT9zmC",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#e5b466",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_55",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Sales Representative</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "T4R7O3Vbal",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_56",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">D|G Realty Team | <strong>Re/Max Experts</strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "mhjUM9z7-E",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "22px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": false,
                                        "linkColor": "#ffffff",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": false,
                                        "linkHoverUnderline": true,
                                        "body": false
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_57",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<div><span style=\"color: #ffffff; line-height: 30.8px;\"><a rel=\"noopener\" href=\"tel:16476918245\" target=\"_blank\" style=\"color: #ffffff;\" data-u-link-value=\"eyJuYW1lIjoicGhvbmUiLCJhdHRycyI6eyJocmVmIjoidGVsOnt7cGhvbmV9fSJ9LCJ2YWx1ZXMiOnsicGhvbmUiOiIxNjQ3NjkxODI0NSJ9fQ==\">647-691-8245</a></span></div>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center",
                                            "containerPadding": "0px 0px 30px 10px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_55",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "3px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "hQViQqbAc9",
                            "contents": [{
                                "id": "EFveykpaK4",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px 50px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698971042230-matt.png",
                                        "width": 600,
                                        "height": 600
                                    },
                                    "textAlign": "center",
                                    "altText": "Image",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_26",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "0px 70px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "T6eiaurWJQ",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontSize": "24px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_54",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><strong><span style=\"line-height: 33.6px; color: #ffffff;\">Matthew Campoli, B.A.</span></strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "25px",
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "y8BHFXtWYJ",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#e5b466",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_51",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Sales Representative</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "Binxp8s-dq",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_53",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">RSDNCY. Group | <strong>EXP Realty</strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "p2rQOd06eS",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontWeight": 400,
                                    "fontSize": "22px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": false,
                                        "linkColor": "#ffffff",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": false,
                                        "linkHoverUnderline": true,
                                        "body": false
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_52",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"color: #ffffff; line-height: 30.8px;\"><a rel=\"noopener\" href=\"tel:16479322254\" target=\"_blank\" style=\"color: #ffffff;\" data-u-link-value=\"eyJuYW1lIjoicGhvbmUiLCJhdHRycyI6eyJocmVmIjoidGVsOnt7cGhvbmV9fSJ9LCJ2YWx1ZXMiOnsicGhvbmUiOiIxNjQ3OTMyMjI1NCJ9fQ==\">647-932-2254</a></span></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_56",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#fff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_32",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "1qw0d5DPQx",
                        "cells": [1],
                        "columns": [{
                            "id": "eNLRY2LaO4",
                            "contents": [{
                                "id": "0Uezxmu-kZ",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "2px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#e5b466"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_15",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "95qaIu4cHh",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698954673479-The%2BCollective-logos_main-gold+%282%29.png",
                                        "width": 1921,
                                        "height": 1081,
                                        "maxWidth": "29%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "https://www.thecondocollection.ca/",
                                            "target": "_blank"
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_31",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "src": {
                                                "maxWidth": "72%",
                                                "autoWidth": false
                                            }
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_63",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_37",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "headers": [],
                    "footers": [],
                    "values": {
                        "popupPosition": "center",
                        "popupWidth": "600px",
                        "popupHeight": "auto",
                        "borderRadius": "10px",
                        "contentAlign": "center",
                        "contentVerticalAlign": "center",
                        "contentWidth": 600,
                        "fontFamily": {
                            "label": "Tahoma",
                            "value": "tahoma,arial,helvetica,sans-serif",
                            "url": "",
                            "defaultFont": true,
                            "weights": null
                        },
                        "textColor": "#000000",
                        "popupBackgroundColor": "#FFFFFF",
                        "popupBackgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": "no-repeat",
                            "size": "cover",
                            "position": "center"
                        },
                        "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
                        "popupCloseButton_position": "top-right",
                        "popupCloseButton_backgroundColor": "#DDDDDD",
                        "popupCloseButton_iconColor": "#000000",
                        "popupCloseButton_borderRadius": "0px",
                        "popupCloseButton_margin": "0px",
                        "popupCloseButton_action": {
                            "name": "close_popup",
                            "attrs": {
                                "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                            }
                        },
                        "backgroundColor": "#e7e7e7",
                        "backgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": "no-repeat",
                            "size": "custom",
                            "position": "center"
                        },
                        "preheaderText": "",
                        "linkStyle": {
                            "body": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "_meta": {
                            "htmlID": "u_body",
                            "htmlClassNames": "u_body"
                        }
                    }
                },
                "schemaVersion": 16
            },
        );
      }

      if (id == 3) {
        unlayer.loadDesign({
                "body": {
                    "id": "sLieBV_M2v",
                    "rows": [{
                        "id": "liK7Jt8my1",
                        "cells": [2, 1],
                        "columns": [{
                            "id": "-sdGRE1lap",
                            "contents": [{
                                "id": "9FjDaNAzIC",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698954673479-The%2BCollective-logos_main-gold+%282%29.png",
                                        "width": 1921,
                                        "height": 1081,
                                        "maxWidth": "34%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "left",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_2",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_2",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "MeETa7QiLm",
                            "contents": [{
                                "id": "NieEsIDe64",
                                "type": "text",
                                "values": {
                                    "containerPadding": "20px 10px 20px 0px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": false,
                                        "linkColor": "#e5b466",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": false,
                                        "linkHoverUnderline": true,
                                        "body": false
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_1",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><a rel=\"noopener\" href=\"https://www.thecondocollection.ca/\" target=\"_blank\" data-u-link-value=\"eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vd3d3LnRoZWNvbmRvY29sbGVjdGlvbi5jYS8iLCJ0YXJnZXQiOiJfYmxhbmsifX0=\"><span style=\"color: #e5b466; line-height: 14px;\">View the other projects in our collection</span></a></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "10px",
                                            "textAlign": "center",
                                            "hideMobile": true,
                                            "containerPadding": "0px 10px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_3",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#ffffff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_2",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\"><span style=\"color: #e5b466; line-height: 16.8px;\">View Our Other Projects</span></p>"
                        }
                    }, {
                        "id": "aY8D5Aiav-",
                        "cells": [1],
                        "columns": [{
                            "id": "tszKBlUaLV",
                            "contents": [{
                                "id": "YMrSnOAt7R",
                                "type": "image",
                                "values": {
                                    "containerPadding": "10px 0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700188028268-8+TEMPLE+Logo+Copper.png",
                                        "width": 800,
                                        "height": 116,
                                        "id": 17495362,
                                        "preview": {
                                            "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700188028268-8+TEMPLE+Logo+Copper.png",
                                            "width": 800,
                                            "height": 116
                                        },
                                        "maxWidth": "47%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": ""
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_1",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_5",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_4",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "EBNw8F4F4h",
                        "cells": [1],
                        "columns": [{
                            "id": "wOUq266AL4",
                            "contents": [{
                                "id": "sKZyKD3Mc9",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 20px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontWeight": 400,
                                    "fontSize": "26px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_2",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><span style=\"background-color: #4a3383; line-height: 30.8px;\"><strong> 15 </strong><span style=\"color: #e5b466; line-height: 30.8px;\">Stories </span></span></p>\n<p style=\"line-height: 140%;\"><span style=\"background-color: #4a3383; line-height: 30.8px;\"><strong> 246</strong> <span style=\"color: #e5b466; line-height: 30.8px;\">Suites </span></span></p>\n<div title=\"\">\n<div>\n<p style=\"line-height: 140%;\"><span style=\"background-color: #4a3383; line-height: 30.8px;\"><strong> 447 - 1351</strong> <span style=\"color: #e5b466; line-height: 30.8px;\">SqFt </span></span></p>\n</div>\n</div>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "18px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "nWqy67VxA9",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "0px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "110px 10px 10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_1",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "70px 10px 10px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "dAM6GREcx_",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontWeight": 400,
                                    "fontSize": "22px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_76",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 30.8px; background-color: #4a3383;\"><strong> Starting From </strong></span></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "18px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "_ZKe4sMCCH",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 40px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Global Font",
                                        "value": "inherit"
                                    },
                                    "fontWeight": 700,
                                    "fontSize": "51px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkHoverColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_3",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 71.4px; background-color: #4a3383;\"> $649,900 </span></p>",
                                    "_override": {
                                        "mobile": {
                                            "color": "#4a3383",
                                            "fontSize": "32px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "-hlcmENuBh",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "0px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#BBB"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "80px 10px 10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_2",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "30px 10px 10px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_4",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700188074882-8+Temple+Hero+Rendering+2.jpg",
                                "fullWidth": false,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "bottom-center",
                                "width": 800,
                                "height": 691,
                                "customPosition": ["50%", "100%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_3",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "6vDrHMxMLC",
                        "cells": [1, 2],
                        "columns": [{
                            "id": "dvFjK7GxN5",
                            "contents": [{
                                "id": "YxHRaR7AB9",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700252821092-576398.png",
                                        "width": 587,
                                        "height": 785,
                                        "autoWidth": true,
                                        "maxWidth": "100%"
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_40",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_81",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }, {
                            "id": "G3mjIWtU4i",
                            "contents": [{
                                "id": "IOOl-i9tpP",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700252435961-8+Temple+Living+Dining+East.jpg",
                                        "width": 800,
                                        "height": 535
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_41",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_82",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "_meta": {
                                "htmlID": "u_row_47",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "mguEthFCJQ",
                        "cells": [2, 1],
                        "columns": [{
                            "id": "yzmtIG5qU9",
                            "contents": [{
                                "id": "jV6h0upZnA",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700254490135-8+Temple+Living+Dining+South.jpg",
                                        "width": 800,
                                        "height": 535,
                                        "autoWidth": true,
                                        "maxWidth": "100%"
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_42",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_83",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }, {
                            "id": "HdUdD2QK_g",
                            "contents": [{
                                "id": "O2_pmEKhwW",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700254600563-423174.png",
                                        "width": 587,
                                        "height": 783
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_43",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_84",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "_meta": {
                                "htmlID": "u_row_48",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "ZEebRFYJxy",
                        "cells": [1, 2],
                        "columns": [{
                            "id": "My-Sa9MwlD",
                            "contents": [{
                                "id": "gm1V7Bwt_X",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700189580397-8_Temple_Hero_Rendering_2-removebg-preview.png",
                                        "width": 324,
                                        "height": 462,
                                        "maxWidth": "72%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_38",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_76",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#ffffff"
                            }
                        }, {
                            "id": "ALqHop_9cB",
                            "contents": [{
                                "id": "dppgNvK4J3",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "color": "#000000",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_72",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<h2>Where the Modern Lifestyle Meets Curated Design</h2>\n<p style=\"line-height: 140%;\">Centered on transit and surrounded by the lake and urban landmark amenities, 8 Temple is a place for first-time buyers to grow, and young urban families to grow into. It offers a range of spacious, well-thought-out suites designed by award-winning design studio Chapi Chapo Design, that over-deliver on style and substance.</p>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_77",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#ffffff"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_44",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "iCw5YVEKm8",
                        "cells": [1],
                        "columns": [{
                            "id": "2YtgVggCUc",
                            "contents": [{
                                "id": "hM0JaLDW8D",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1700189908806-Enmascarar-grupo-9308-1+%281%29.jpg",
                                        "width": 1308,
                                        "height": 1186
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_39",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_80",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": ""
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_46",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "f9rbqMthw5",
                        "cells": [2, 1],
                        "columns": [{
                            "id": "dbQH09cEj6",
                            "contents": [{
                                "id": "9WKUjvKHDA",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "10px 10px 4px",
                                    "anchor": "",
                                    "headingType": "h1",
                                    "fontSize": "22px",
                                    "color": "#e5b466",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_9",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<strong>8 Temple Condos</strong>"
                                }
                            }, {
                                "id": "6L73S5mHZX",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_73",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"color: #e5b466; line-height: 19.6px;\">Developer:</span> <strong>Curated Properties<br /></strong><span style=\"color: #e5b466; line-height: 19.6px;\">Neighbourhood:</span><strong> Liberty Village</strong></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #e5b466; line-height: 19.6px;\">Estimated Completion:</span> <strong>January 2027<br /></strong></p>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_78",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "D7ODsFFz0o",
                            "contents": [{
                                "id": "87qjFFmm4X",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "fontSize": "19px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_74",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<div title=\"\">\n<p style=\"line-height: 140%;\"><strong>15 </strong><span style=\"color: #e5b466; line-height: 26.6px;\">Stories</span></p>\n<p style=\"line-height: 140%;\"><strong>246</strong> <span style=\"color: #e5b466; line-height: 26.6px;\">Suites</span></p>\n<div title=\"\">\n<div>\n<p style=\"line-height: 140%;\"><strong>447 - 1351</strong> <span style=\"color: #e5b466; line-height: 26.6px;\">SqFt</span></p>\n</div>\n</div>\n</div>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_79",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "10px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_45",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "aQ4wb0xlhw",
                        "cells": [1],
                        "columns": [{
                            "id": "cYMfxtDPKu",
                            "contents": [{
                                "id": "DNSJu-OT4i",
                                "type": "button",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "href": {
                                        "name": "web",
                                        "values": {
                                            "href": "https://lakevu.thecondocollection.ca/",
                                            "target": "_blank"
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "buttonColors": {
                                        "color": "#4a3383",
                                        "backgroundColor": "#ffffff",
                                        "hoverColor": "#FFF",
                                        "hoverBackgroundColor": "#3AAEE0"
                                    },
                                    "size": {
                                        "autoWidth": false,
                                        "width": "75%"
                                    },
                                    "fontSize": "14px",
                                    "textAlign": "center",
                                    "lineHeight": "120%",
                                    "padding": "5px 60px",
                                    "border": {},
                                    "borderRadius": "4px",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_button_2",
                                        "htmlClassNames": "u_content_button"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<span style=\"display: block; padding: 10px 25px; line-height: 16.8px;\"><strong><span style=\"line-height: 16.8px;\">DOWNLOAD BROCHURE</span></strong></span>",
                                    "_override": {
                                        "mobile": {
                                            "size": {
                                                "width": "100%",
                                                "autoWidth": false
                                            }
                                        }
                                    },
                                    "calculatedWidth": 465,
                                    "calculatedHeight": 47
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_9",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "10px 0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#fff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_7",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "XCGwn-t5_p",
                        "cells": [1],
                        "columns": [{
                            "id": "9LupLwneeB",
                            "contents": [{
                                "id": "32exqtl4of",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "20px 10px",
                                    "anchor": "",
                                    "headingType": "h2",
                                    "fontSize": "38px",
                                    "color": "#ffffff",
                                    "textAlign": "center",
                                    "lineHeight": "110%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_5",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p>Get in Touch With a 8 Temple <strong>Pre-Construction Expert</strong> Now</p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "32px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_58",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_34",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }, {
                        "id": "Bc_mIAW6Z8",
                        "cells": [1, 1],
                        "columns": [{
                            "id": "q4NTT7knrs",
                            "contents": [{
                                "id": "StkyzTI7dh",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px 50px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698971048137-dan.png",
                                        "width": 600,
                                        "height": 600
                                    },
                                    "textAlign": "left",
                                    "altText": "Image",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_25",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "0px 70px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "lTvCfd_WAL",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "24px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_50",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><strong><span style=\"line-height: 35px; color: #ffffff;\">Daniel Foti</span></strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "gzKmhT9zmC",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#e5b466",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_55",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Sales Representative</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "T4R7O3Vbal",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_56",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">D|G Realty Team | <strong>Re/Max Experts</strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "mhjUM9z7-E",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "anchor": "",
                                    "fontSize": "22px",
                                    "color": "#ffffff",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": false,
                                        "linkColor": "#ffffff",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": false,
                                        "linkHoverUnderline": true,
                                        "body": false
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_57",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<div><span style=\"color: #ffffff; line-height: 30.8px;\"><a rel=\"noopener\" href=\"tel:16476918245\" target=\"_blank\" style=\"color: #ffffff;\" data-u-link-value=\"eyJuYW1lIjoicGhvbmUiLCJhdHRycyI6eyJocmVmIjoidGVsOnt7cGhvbmV9fSJ9LCJ2YWx1ZXMiOnsicGhvbmUiOiIxNjQ3NjkxODI0NSJ9fQ==\">647-691-8245</a></span></div>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center",
                                            "containerPadding": "0px 0px 30px 10px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_55",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "3px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "hQViQqbAc9",
                            "contents": [{
                                "id": "EFveykpaK4",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px 50px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698971042230-matt.png",
                                        "width": 600,
                                        "height": 600
                                    },
                                    "textAlign": "center",
                                    "altText": "Image",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_26",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "containerPadding": "0px 70px"
                                        }
                                    },
                                    "hideMobile": false
                                }
                            }, {
                                "id": "T6eiaurWJQ",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontSize": "24px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_54",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><strong><span style=\"line-height: 33.6px; color: #ffffff;\">Matthew Campoli, B.A.</span></strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "25px",
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "y8BHFXtWYJ",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#e5b466",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_51",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Sales Representative</p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "Binxp8s-dq",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontSize": "12px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_53",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">RSDNCY. Group | <strong>EXP Realty</strong></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }, {
                                "id": "p2rQOd06eS",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "anchor": "",
                                    "fontWeight": 400,
                                    "fontSize": "22px",
                                    "color": "#ffffff",
                                    "textAlign": "right",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": false,
                                        "linkColor": "#ffffff",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": false,
                                        "linkHoverUnderline": true,
                                        "body": false
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_52",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"color: #ffffff; line-height: 30.8px;\"><a rel=\"noopener\" href=\"tel:16479322254\" target=\"_blank\" style=\"color: #ffffff;\" data-u-link-value=\"eyJuYW1lIjoicGhvbmUiLCJhdHRycyI6eyJocmVmIjoidGVsOnt7cGhvbmV9fSJ9LCJ2YWx1ZXMiOnsicGhvbmUiOiIxNjQ3OTMyMjI1NCJ9fQ==\">647-932-2254</a></span></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_56",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "#fff",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "top-center",
                                "customPosition": ["50%", "0%"]
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_32",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "hideMobile": false,
                            "noStackMobile": false
                        }
                    }, {
                        "id": "1qw0d5DPQx",
                        "cells": [1],
                        "columns": [{
                            "id": "eNLRY2LaO4",
                            "contents": [{
                                "id": "0Uezxmu-kZ",
                                "type": "divider",
                                "values": {
                                    "width": "100%",
                                    "border": {
                                        "borderTopWidth": "2px",
                                        "borderTopStyle": "solid",
                                        "borderTopColor": "#e5b466"
                                    },
                                    "textAlign": "center",
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_15",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "95qaIu4cHh",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698954673479-The%2BCollective-logos_main-gold+%282%29.png",
                                        "width": 1921,
                                        "height": 1081,
                                        "maxWidth": "29%",
                                        "autoWidth": false
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "https://www.thecondocollection.ca/",
                                            "target": "_blank"
                                        },
                                        "attrs": {
                                            "href": "{{href}}",
                                            "target": "{{target}}"
                                        }
                                    },
                                    "hideDesktop": false,
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_31",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "_override": {
                                        "mobile": {
                                            "src": {
                                                "maxWidth": "72%",
                                                "autoWidth": false
                                            }
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_63",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }],
                        "values": {
                            "displayCondition": null,
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": "no-repeat",
                                "size": "custom",
                                "position": "center"
                            },
                            "padding": "0px",
                            "anchor": "",
                            "hideDesktop": false,
                            "_meta": {
                                "htmlID": "u_row_37",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "headers": [],
                    "footers": [],
                    "values": {
                        "popupPosition": "center",
                        "popupWidth": "600px",
                        "popupHeight": "auto",
                        "borderRadius": "10px",
                        "contentAlign": "center",
                        "contentVerticalAlign": "center",
                        "contentWidth": 640,
                        "fontFamily": {
                            "label": "Tahoma",
                            "value": "tahoma,arial,helvetica,sans-serif",
                            "url": "",
                            "weights": null,
                            "defaultFont": true
                        },
                        "textColor": "#000000",
                        "popupBackgroundColor": "#FFFFFF",
                        "popupBackgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": "no-repeat",
                            "size": "cover",
                            "position": "center"
                        },
                        "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
                        "popupCloseButton_position": "top-right",
                        "popupCloseButton_backgroundColor": "#DDDDDD",
                        "popupCloseButton_iconColor": "#000000",
                        "popupCloseButton_borderRadius": "0px",
                        "popupCloseButton_margin": "0px",
                        "popupCloseButton_action": {
                            "name": "close_popup",
                            "attrs": {
                                "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                            }
                        },
                        "backgroundColor": "transparent",
                        "backgroundImage": {
                            "url": "",
                            "fullWidth": true,
                            "repeat": "no-repeat",
                            "size": "custom",
                            "position": "center"
                        },
                        "preheaderText": "",
                        "linkStyle": {
                            "body": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "_meta": {
                            "htmlID": "u_body",
                            "htmlClassNames": "u_body"
                        }
                    }
                },
                "schemaVersion": 16
            },
        );
      }

}