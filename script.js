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
                                    "containerPadding": "10px",
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
                                    "hideable": true
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
                                    "containerPadding": "21px 10px 10px",
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
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
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
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"color: #e5b466; line-height: 16.8px;\">View Our Other Projects</span></p>",
                                    "_override": {
                                        "mobile": {
                                            "fontSize": "10px",
                                            "textAlign": "center",
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
                            "hideable": true
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
                                    "containerPadding": "0px 0px 20px",
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
                                    "containerPadding": "0px 0px 10px 20px",
                                    "fontSize": "14px",
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
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 19.6px; color: #e5b466;\">IN <strong>BARRIE, ONTARIO</strong></span></p>"
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
                                    "hideMobile": false
                                }
                            }, {
                                "id": "sKZyKD3Mc9",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 20px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                        "label": "Montserrat",
                                        "value": "'Montserrat',sans-serif",
                                        "weights": null,
                                        "defaultFont": true
                                    },
                                    "fontWeight": 400,
                                    "fontSize": "22px",
                                    "color": "#fff",
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
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"color: #4a3383; line-height: 30.8px;\"><strong>Starting From</strong></span></p>",
                                    "hideMobile": false
                                }
                            }, {
                                "id": "_ZKe4sMCCH",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 40px 20px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                        "label": "Montserrat",
                                        "value": "'Montserrat',sans-serif",
                                        "weights": null,
                                        "defaultFont": true
                                    },
                                    "fontWeight": 700,
                                    "fontSize": "51px",
                                    "color": "#fff",
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
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"color: #4a3383; line-height: 71.4px;\">$499,900</span></p>",
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
                        "id": "ybhPzdLcyj",
                        "cells": [1],
                        "columns": [{
                            "id": "1HrcJztcEo",
                            "contents": [{
                                "id": "RovV50Ee9g",
                                "type": "text",
                                "values": {
                                    "containerPadding": "20px",
                                    "anchor": "",
                                    "fontSize": "19px",
                                    "color": "#000",
                                    "textAlign": "center",
                                    "lineHeight": "120%",
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
                                        "htmlID": "u_content_text_4",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word;\"><span style=\"color: #ffffff; line-height: 22.8px;\"><strong>LAKEVU3 CONDO</strong></span></h1>\n<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; overflow-wrap: break-word;\"><span style=\"color: #e5b466; line-height: 22.8px;\"><strong>VIP BROKER EVENT</strong></span></h1>",
                                    "hideMobile": false
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
                                    "htmlID": "u_column_6",
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
                                "htmlID": "u_row_5",
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
                        "id": "wrTmDfrsvE",
                        "cells": [1, 1],
                        "columns": [{
                            "id": "JKGuf1jBaS",
                            "contents": [{
                                "id": "vQCrsjZ-d-",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 20px",
                                    "anchor": "",
                                    "fontSize": "29px",
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
                                        "htmlID": "u_content_text_5",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"> </p>\n<h1 class=\"v-text-align v-line-height v-font-size\" style=\"margin: 0px; color: #1f1f1f; line-height: 100%; text-align: left; word-wrap: break-word;\"><span style=\"color: #ecf0f1; line-height: 40.6px;\"><strong>TWO DAYS ONLY</strong></span></h1>\n<h1 class=\"v-text-align v-line-height v-font-size\" style=\"margin: 0px; color: #1f1f1f; line-height: 100%; text-align: left; word-wrap: break-word;\"> </h1>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center",
                                            "containerPadding": "0px"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_7",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "borderRadius": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "79_a94bCmR",
                            "contents": [{
                                "id": "WaMG7x1Syn",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 20px",
                                    "anchor": "",
                                    "fontSize": "18px",
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
                                        "htmlID": "u_content_text_6",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"> </p>\n<h1 class=\"v-text-align v-line-height v-font-size\" style=\"margin: 0px; color: #e67e23; line-height: 120%; text-align: left; word-wrap: break-word;\"><span style=\"color: #e5b466; line-height: 25.2px;\"><strong>Now or Never!</strong></span></h1>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><strong><span style=\"color: #ffffff; line-height: 25.2px;\">SAT &amp; SUN</span></strong></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #ffffff; line-height: 25.2px;\">NOVEMBER <strong>4-5</strong></span></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #ffffff; line-height: 25.2px;\">12PM - 5PM</span></p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><strong><span style=\"color: #ffffff; line-height: 25.2px;\">11 Lakeside Terrace </span></strong></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #ffffff; line-height: 25.2px;\">Barrie, Ontario</span></p>",
                                    "_override": {
                                        "mobile": {
                                            "textAlign": "center"
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_8",
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
                                "htmlID": "u_row_6",
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
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_4",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
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
                                            "href": "",
                                            "target": "_blank"
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
                                    "calculatedWidth": 435,
                                    "calculatedHeight": 47,
                                    "_override": {
                                        "mobile": {
                                            "size": {
                                                "autoWidth": false,
                                                "width": "100%"
                                            }
                                        }
                                    }
                                }
                            }, {
                                "id": "XXjlS8EQym",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 20px 20px",
                                    "anchor": "",
                                    "fontSize": "14px",
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
                                        "htmlID": "u_content_text_7",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 19.6px; color: #e5b466;\">Snacks &amp; refreshments will be provided</span></p>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_9",
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
                                    "text": "<p style=\"line-height: 140%;\"> </p>\n<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word;\"><span style=\"color: #4a3383; line-height: 19.6px;\"><strong>YOUR INCENTIVES</strong></span></h1>",
                                    "_meta": {
                                        "htmlID": "u_content_text_20",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "color": "#ffffff",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverColor": "#00e",
                                        "linkHoverUnderline": true
                                    },
                                    "textAlign": "center",
                                    "hideMobile": false,
                                    "lineHeight": "140%",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "30px",
                                    "displayCondition": null
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
                            "_meta": {
                                "htmlID": "u_row_22",
                                "htmlClassNames": "u_row"
                            },
                            "anchor": "",
                            "columns": false,
                            "padding": "0px",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "hideMobile": false,
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "noStackMobile": false,
                            "backgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "size": "custom",
                                "repeat": "no-repeat",
                                "position": "top-center",
                                "fullWidth": true,
                                "customPosition": ["50%", "0%"]
                            },
                            "displayCondition": null,
                            "columnsBackgroundColor": "#fff"
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
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965149851-car-park.png",
                                        "width": 70,
                                        "height": 70
                                    },
                                    "_meta": {
                                        "htmlID": "u_content_image_15",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "anchor": "",
                                    "altText": "",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "textAlign": "center",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
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
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; background-color: #4a3383;\"><strong><span style=\"line-height: 35px; color: #ffffff;\">   FREE PARKING  </span></strong></span></p>",
                                    "_meta": {
                                        "htmlID": "u_content_text_21",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "color": "#000",
                                    "anchor": "",
                                    "fontSize": "25px",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverColor": "#00e",
                                        "linkHoverUnderline": true
                                    },
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "ZqU2fLolVv",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px 20px",
                                    "anchor": "",
                                    "fontSize": "26px",
                                    "color": "#4a3383",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_22",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"text-decoration: line-through; line-height: 36.4px;\">$39,900</span></p>"
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
                            "_meta": {
                                "htmlID": "u_row_24",
                                "htmlClassNames": "u_row"
                            },
                            "anchor": "",
                            "columns": false,
                            "padding": "0px",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "backgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "size": "custom",
                                "repeat": "no-repeat",
                                "position": "top-center",
                                "fullWidth": true,
                                "customPosition": ["50%", "0%"]
                            },
                            "displayCondition": null,
                            "columnsBackgroundColor": ""
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
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965161051-legal-document.png",
                                        "width": 70,
                                        "height": 70
                                    },
                                    "_meta": {
                                        "htmlID": "u_content_image_16",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "anchor": "",
                                    "altText": "",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "textAlign": "center",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
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
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; background-color: #4a3383;\"><strong><span style=\"line-height: 35px; color: #ffffff;\">   FREE LAWYER REVIEW  </span></strong></span></p>",
                                    "_meta": {
                                        "htmlID": "u_content_text_23",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "color": "#000",
                                    "anchor": "",
                                    "fontSize": "25px",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverColor": "#00e",
                                        "linkHoverUnderline": true
                                    },
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
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
                            "_meta": {
                                "htmlID": "u_row_25",
                                "htmlClassNames": "u_row"
                            },
                            "columns": false,
                            "padding": "0px",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "backgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "size": "custom",
                                "repeat": "no-repeat",
                                "position": "top-center",
                                "fullWidth": true,
                                "customPosition": ["50%", "0%"]
                            },
                            "displayCondition": null,
                            "columnsBackgroundColor": ""
                        }
                    }, {
                        "id": "9XX-Qy1Say",
                        "cells": [1, 1],
                        "columns": [{
                            "id": "7Zk-nGfGnB",
                            "contents": [{
                                "id": "ZqOlsIHC0H",
                                "type": "image",
                                "values": {
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965167297-10-percent.png",
                                        "width": 70,
                                        "height": 70,
                                        "autoWidth": false,
                                        "maxWidth": "26%"
                                    },
                                    "_meta": {
                                        "htmlID": "u_content_image_17",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "anchor": "",
                                    "altText": "",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "textAlign": "center",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "SGV3ya1u7b",
                                "type": "text",
                                "values": {
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">ONLY 10%</span></strong></span></p>",
                                    "_meta": {
                                        "htmlID": "u_content_text_25",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "color": "#843fa1",
                                    "fontSize": "25px",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverColor": "#00e",
                                        "linkHoverUnderline": true
                                    },
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "-QGmxFHWgN",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px 20px",
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
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_28",
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
                                "backgroundColor": "#e5b466",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_35",
                                    "htmlClassNames": "u_column"
                                }
                            }
                        }, {
                            "id": "VUrK2S7eO9",
                            "contents": [{
                                "id": "loy9nMIeWq",
                                "type": "image",
                                "values": {
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965172111-data-exchange.png",
                                        "width": 70,
                                        "height": 70,
                                        "autoWidth": false,
                                        "maxWidth": "26%"
                                    },
                                    "_meta": {
                                        "htmlID": "u_content_image_20",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "altText": "",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "textAlign": "center",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "UnWo-m4MBn",
                                "type": "text",
                                "values": {
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">FREE ASSIGNMENT</span></strong></span></p>",
                                    "_meta": {
                                        "htmlID": "u_content_text_29",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "color": "#843fa1",
                                    "fontSize": "25px",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverColor": "#00e",
                                        "linkHoverUnderline": true
                                    },
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "ZV3et_e2I2",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px 20px",
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
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_30",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 100%;\"><span style=\"line-height: 15px;\">* Legal Fees Apply</span></p>"
                                }
                            }],
                            "values": {
                                "backgroundColor": "#e5b466",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_42",
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
                                "htmlID": "u_row_23",
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
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965199851-deal.png",
                                        "width": 70,
                                        "height": 70,
                                        "autoWidth": false,
                                        "maxWidth": "26%"
                                    },
                                    "_meta": {
                                        "htmlID": "u_content_image_21",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "anchor": "",
                                    "altText": "",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "textAlign": "center",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "ud8Tv4HMxF",
                                "type": "text",
                                "values": {
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">RIGHT TO LEASE</span></strong></span></p>",
                                    "_meta": {
                                        "htmlID": "u_content_text_31",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "color": "#843fa1",
                                    "fontSize": "25px",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverColor": "#00e",
                                        "linkHoverUnderline": true
                                    },
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "KudnK6wCa4",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px 20px",
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
                                "backgroundColor": "#e5b466",
                                "padding": "0px 0px 10px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_49",
                                    "htmlClassNames": "u_column"
                                }
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
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_divider_7",
                                        "htmlClassNames": "u_content_divider"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }, {
                                "id": "VyaCwU--OJ",
                                "type": "image",
                                "values": {
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965193214-hand.png",
                                        "width": 70,
                                        "height": 70,
                                        "autoWidth": false,
                                        "maxWidth": "26%"
                                    },
                                    "_meta": {
                                        "htmlID": "u_content_image_22",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "altText": "",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "textAlign": "center",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "qyZlwZfsOi",
                                "type": "text",
                                "values": {
                                    "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">$8,500</span></strong></span></p>",
                                    "_meta": {
                                        "htmlID": "u_content_text_33",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "color": "#843fa1",
                                    "fontSize": "25px",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#00e",
                                        "linkUnderline": true,
                                        "linkHoverColor": "#00e",
                                        "linkHoverUnderline": true
                                    },
                                    "textAlign": "center",
                                    "lineHeight": "140%",
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "10px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "cuMvb3JdQs",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 10px 20px",
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
                                    "text": "<p style=\"line-height: 100%;\"><span style=\"line-height: 15px;\">Capped Development Charges</span></p>"
                                }
                            }],
                            "values": {
                                "backgroundColor": "#e5b466",
                                "padding": "0px 0px 10px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_50",
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
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_52",
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
                                    "text": "<p style=\"line-height: 100%;\">Where</p>"
                                }
                            }, {
                                "id": "Fgu1wiWxv2",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px",
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
                                    "text": "<p style=\"line-height: 100%;\"><strong><span style=\"line-height: 71px; color: #4a3383;\">Joy</span></strong> Meets the Water's Edge</p>"
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
                                            "href": "",
                                            "target": "_blank"
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
                                    "calculatedWidth": 279,
                                    "calculatedHeight": 47,
                                    "_override": {
                                        "mobile": {
                                            "size": {
                                                "autoWidth": false,
                                                "width": "100%"
                                            }
                                        }
                                    }
                                }
                            }],
                            "values": {
                                "backgroundColor": "#e5b466",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_53",
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
                                        "url": "https://editor.ne16.com/condos/Video-tour.jpg",
                                        "width": 1361,
                                        "height": 628
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
                                "backgroundColor": "",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_59",
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
                                    "text": "<p>Get in Touch With a LakeVu3 Pre-Construction Expert Now</p>"
                                }
                            }],
                            "values": {
                                "backgroundColor": "#4a3383",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_58",
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
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698964208954-531067.png",
                                        "width": 500,
                                        "height": 500
                                    },
                                    "_meta": {
                                        "htmlID": "u_content_image_25",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "anchor": "",
                                    "altText": "Image",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "textAlign": "center",
                                    "hideMobile": false,
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "0px 50px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "lTvCfd_WAL",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "fontSize": "27px",
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
                                    "text": "<p style=\"line-height: 140%;\"><strong><span style=\"line-height: 37.8px; color: #ffffff;\">Daniel Foti</span></strong></p>"
                                }
                            }, {
                                "id": "gzKmhT9zmC",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
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
                                    "text": "<p style=\"line-height: 140%;\">Sales Representative</p>"
                                }
                            }, {
                                "id": "T4R7O3Vbal",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
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
                                    "text": "<p style=\"line-height: 140%;\">D|G Realty Team | <strong>Re/Max Experts</strong></p>"
                                }
                            }, {
                                "id": "mhjUM9z7-E",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 0px 0px 10px",
                                    "fontSize": "22px",
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
                                    "text": "<div>647-628-3684</div>"
                                }
                            }],
                            "values": {
                                "_meta": {
                                    "htmlID": "u_column_55",
                                    "htmlClassNames": "u_column"
                                },
                                "border": {},
                                "padding": "0px",
                                "backgroundColor": "#4a3383"
                            }
                        }, {
                            "id": "hQViQqbAc9",
                            "contents": [{
                                "id": "EFveykpaK4",
                                "type": "image",
                                "values": {
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698964192832-376897.png",
                                        "width": 401,
                                        "height": 401
                                    },
                                    "_meta": {
                                        "htmlID": "u_content_image_26",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "anchor": "",
                                    "altText": "Image",
                                    "hideable": true,
                                    "deletable": true,
                                    "draggable": true,
                                    "textAlign": "center",
                                    "hideMobile": false,
                                    "selectable": true,
                                    "hideDesktop": false,
                                    "duplicatable": true,
                                    "containerPadding": "0px 50px",
                                    "displayCondition": null
                                }
                            }, {
                                "id": "T6eiaurWJQ",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "fontSize": "27px",
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
                                    "text": "<p style=\"line-height: 140%;\"><strong><span style=\"line-height: 37.8px; color: #ffffff;\">Matthew Campoli, B.A.</span></strong></p>"
                                }
                            }, {
                                "id": "y8BHFXtWYJ",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
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
                                    "text": "<p style=\"line-height: 140%;\">Sales Representative</p>"
                                }
                            }, {
                                "id": "Binxp8s-dq",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
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
                                    "text": "<p style=\"line-height: 140%;\">RSDNCY. Group | EXP Realty</p>"
                                }
                            }, {
                                "id": "p2rQOd06eS",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px 10px 0px 0px",
                                    "fontSize": "22px",
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
                                    "text": "<p style=\"line-height: 140%;\"> 416-371-5793</p>"
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
                            "_meta": {
                                "htmlID": "u_row_32",
                                "htmlClassNames": "u_row"
                            },
                            "anchor": "",
                            "columns": false,
                            "padding": "0px",
                            "hideable": true,
                            "deletable": true,
                            "draggable": true,
                            "hideMobile": false,
                            "selectable": true,
                            "hideDesktop": false,
                            "duplicatable": true,
                            "noStackMobile": false,
                            "backgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "size": "custom",
                                "repeat": "no-repeat",
                                "position": "top-center",
                                "fullWidth": true,
                                "customPosition": ["50%", "0%"]
                            },
                            "displayCondition": null,
                            "columnsBackgroundColor": "#fff"
                        }
                    }, {
                        "id": "1qw0d5DPQx",
                        "cells": [1],
                        "columns": [{
                            "id": "eNLRY2LaO4",
                            "contents": [{
                                "id": "95qaIu4cHh",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "src": {
                                        "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698954673479-The%2BCollective-logos_main-gold+%282%29.png",
                                        "width": 1921,
                                        "height": 1081,
                                        "maxWidth": "46%",
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
                                        "htmlID": "u_content_image_31",
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
                                "backgroundColor": "#4a3383",
                                "padding": "0px",
                                "border": {},
                                "borderRadius": "0px",
                                "_meta": {
                                    "htmlID": "u_column_63",
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
                            "label": "Lato",
                            "value": "'Lato',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Lato:400,700",
                            "weights": [400, 700],
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
                                "containerPadding": "10px",
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
                                "hideable": true
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
                                "containerPadding": "21px 10px 10px",
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
                                    "inherit": true,
                                    "linkColor": "#0000ee",
                                    "linkHoverColor": "#0000ee",
                                    "linkUnderline": true,
                                    "linkHoverUnderline": true
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
                                "text": "<p style=\"line-height: 140%;\"><span style=\"color: #e5b466; line-height: 16.8px;\">View Our Other Projects</span></p>",
                                "_override": {
                                    "mobile": {
                                        "fontSize": "10px",
                                        "textAlign": "center",
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
                        "hideable": true
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
                                "containerPadding": "0px 0px 20px",
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
                                "containerPadding": "0px 0px 10px 20px",
                                "fontSize": "14px",
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
                                "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 19.6px; color: #e5b466;\">IN <strong>BARRIE, ONTARIO</strong></span></p>"
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
                                "hideMobile": false
                            }
                        }, {
                            "id": "sKZyKD3Mc9",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 0px 0px 20px",
                                "anchor": "",
                                "fontFamily": {
                                    "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                    "label": "Montserrat",
                                    "value": "'Montserrat',sans-serif",
                                    "weights": null,
                                    "defaultFont": true
                                },
                                "fontWeight": 400,
                                "fontSize": "22px",
                                "color": "#fff",
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
                                "text": "<p style=\"line-height: 140%;\"><span style=\"color: #4a3383; line-height: 30.8px;\"><strong>Starting From</strong></span></p>",
                                "hideMobile": false
                            }
                        }, {
                            "id": "_ZKe4sMCCH",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 0px 40px 20px",
                                "anchor": "",
                                "fontFamily": {
                                    "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                    "label": "Montserrat",
                                    "value": "'Montserrat',sans-serif",
                                    "weights": null,
                                    "defaultFont": true
                                },
                                "fontWeight": 700,
                                "fontSize": "51px",
                                "color": "#fff",
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
                                "text": "<p style=\"line-height: 140%;\"><span style=\"color: #4a3383; line-height: 71.4px;\">$499,900</span></p>",
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
                    "id": "ybhPzdLcyj",
                    "cells": [1],
                    "columns": [{
                        "id": "1HrcJztcEo",
                        "contents": [{
                            "id": "RovV50Ee9g",
                            "type": "text",
                            "values": {
                                "containerPadding": "20px",
                                "anchor": "",
                                "fontSize": "19px",
                                "color": "#000",
                                "textAlign": "center",
                                "lineHeight": "120%",
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
                                    "htmlID": "u_content_text_4",
                                    "htmlClassNames": "u_content_text"
                                },
                                "selectable": true,
                                "draggable": true,
                                "duplicatable": true,
                                "deletable": true,
                                "hideable": true,
                                "text": "<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word;\"><span style=\"color: #ffffff; line-height: 22.8px;\"><strong>LAKEVU3 CONDO</strong></span></h1>\n<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; overflow-wrap: break-word;\"><span style=\"color: #e5b466; line-height: 22.8px;\"><strong>VIP BROKER EVENT</strong></span></h1>",
                                "hideMobile": false
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
                                "htmlID": "u_column_6",
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
                            "htmlID": "u_row_5",
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
                    "id": "wrTmDfrsvE",
                    "cells": [1, 1],
                    "columns": [{
                        "id": "JKGuf1jBaS",
                        "contents": [{
                            "id": "vQCrsjZ-d-",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 0px 0px 20px",
                                "anchor": "",
                                "fontSize": "29px",
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
                                    "htmlID": "u_content_text_5",
                                    "htmlClassNames": "u_content_text"
                                },
                                "selectable": true,
                                "draggable": true,
                                "duplicatable": true,
                                "deletable": true,
                                "hideable": true,
                                "text": "<p style=\"line-height: 140%;\"> </p>\n<h1 class=\"v-text-align v-line-height v-font-size\" style=\"margin: 0px; color: #1f1f1f; line-height: 100%; text-align: left; word-wrap: break-word;\"><span style=\"color: #ecf0f1; line-height: 40.6px;\"><strong>TWO DAYS ONLY</strong></span></h1>\n<h1 class=\"v-text-align v-line-height v-font-size\" style=\"margin: 0px; color: #1f1f1f; line-height: 100%; text-align: left; word-wrap: break-word;\"> </h1>",
                                "_override": {
                                    "mobile": {
                                        "textAlign": "center",
                                        "containerPadding": "0px"
                                    }
                                }
                            }
                        }],
                        "values": {
                            "_meta": {
                                "htmlID": "u_column_7",
                                "htmlClassNames": "u_column"
                            },
                            "border": {},
                            "padding": "0px",
                            "borderRadius": "0px",
                            "backgroundColor": "#4a3383"
                        }
                    }, {
                        "id": "79_a94bCmR",
                        "contents": [{
                            "id": "WaMG7x1Syn",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 0px 0px 20px",
                                "anchor": "",
                                "fontSize": "18px",
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
                                    "htmlID": "u_content_text_6",
                                    "htmlClassNames": "u_content_text"
                                },
                                "selectable": true,
                                "draggable": true,
                                "duplicatable": true,
                                "deletable": true,
                                "hideable": true,
                                "text": "<p style=\"line-height: 140%;\"> </p>\n<h1 class=\"v-text-align v-line-height v-font-size\" style=\"margin: 0px; color: #e67e23; line-height: 120%; text-align: left; word-wrap: break-word;\"><span style=\"color: #e5b466; line-height: 25.2px;\"><strong>Now or Never!</strong></span></h1>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><strong><span style=\"color: #ffffff; line-height: 25.2px;\">SAT &amp; SUN</span></strong></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #ffffff; line-height: 25.2px;\">NOVEMBER <strong>4-5</strong></span></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #ffffff; line-height: 25.2px;\">12PM - 5PM</span></p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\"><strong><span style=\"color: #ffffff; line-height: 25.2px;\">11 Lakeside Terrace </span></strong></p>\n<p style=\"line-height: 140%;\"><span style=\"color: #ffffff; line-height: 25.2px;\">Barrie, Ontario</span></p>",
                                "_override": {
                                    "mobile": {
                                        "textAlign": "center"
                                    }
                                }
                            }
                        }],
                        "values": {
                            "_meta": {
                                "htmlID": "u_column_8",
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
                            "htmlID": "u_row_6",
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
                                "displayCondition": null,
                                "_meta": {
                                    "htmlID": "u_content_divider_4",
                                    "htmlClassNames": "u_content_divider"
                                },
                                "selectable": true,
                                "draggable": true,
                                "duplicatable": true,
                                "deletable": true,
                                "hideable": true
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
                                        "href": "",
                                        "target": "_blank"
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
                                "calculatedWidth": 435,
                                "calculatedHeight": 47,
                                "_override": {
                                    "mobile": {
                                        "size": {
                                            "autoWidth": false,
                                            "width": "100%"
                                        }
                                    }
                                }
                            }
                        }, {
                            "id": "XXjlS8EQym",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 0px 20px 20px",
                                "anchor": "",
                                "fontSize": "14px",
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
                                    "htmlID": "u_content_text_7",
                                    "htmlClassNames": "u_content_text"
                                },
                                "selectable": true,
                                "draggable": true,
                                "duplicatable": true,
                                "deletable": true,
                                "hideable": true,
                                "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 19.6px; color: #e5b466;\">Snacks &amp; refreshments will be provided</span></p>"
                            }
                        }],
                        "values": {
                            "_meta": {
                                "htmlID": "u_column_9",
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
                                "text": "<p style=\"line-height: 140%;\"> </p>\n<h1 class=\"v-text-align v-font-size\" style=\"margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word;\"><span style=\"color: #4a3383; line-height: 19.6px;\"><strong>YOUR INCENTIVES</strong></span></h1>",
                                "_meta": {
                                    "htmlID": "u_content_text_20",
                                    "htmlClassNames": "u_content_text"
                                },
                                "color": "#ffffff",
                                "anchor": "",
                                "fontSize": "14px",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "linkStyle": {
                                    "inherit": true,
                                    "linkColor": "#00e",
                                    "linkUnderline": true,
                                    "linkHoverColor": "#00e",
                                    "linkHoverUnderline": true
                                },
                                "textAlign": "center",
                                "hideMobile": false,
                                "lineHeight": "140%",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "30px",
                                "displayCondition": null
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
                        "_meta": {
                            "htmlID": "u_row_22",
                            "htmlClassNames": "u_row"
                        },
                        "anchor": "",
                        "columns": false,
                        "padding": "0px",
                        "hideable": true,
                        "deletable": true,
                        "draggable": true,
                        "hideMobile": false,
                        "selectable": true,
                        "hideDesktop": false,
                        "duplicatable": true,
                        "noStackMobile": false,
                        "backgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "size": "custom",
                            "repeat": "no-repeat",
                            "position": "top-center",
                            "fullWidth": true,
                            "customPosition": ["50%", "0%"]
                        },
                        "displayCondition": null,
                        "columnsBackgroundColor": "#fff"
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
                                "src": {
                                    "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965149851-car-park.png",
                                    "width": 70,
                                    "height": 70
                                },
                                "_meta": {
                                    "htmlID": "u_content_image_15",
                                    "htmlClassNames": "u_content_image"
                                },
                                "action": {
                                    "name": "web",
                                    "values": {
                                        "href": "",
                                        "target": "_blank"
                                    }
                                },
                                "anchor": "",
                                "altText": "",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "textAlign": "center",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
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
                                "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; background-color: #4a3383;\"><strong><span style=\"line-height: 35px; color: #ffffff;\">   FREE PARKING  </span></strong></span></p>",
                                "_meta": {
                                    "htmlID": "u_content_text_21",
                                    "htmlClassNames": "u_content_text"
                                },
                                "color": "#000",
                                "anchor": "",
                                "fontSize": "25px",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "linkStyle": {
                                    "inherit": true,
                                    "linkColor": "#00e",
                                    "linkUnderline": true,
                                    "linkHoverColor": "#00e",
                                    "linkHoverUnderline": true
                                },
                                "textAlign": "left",
                                "lineHeight": "140%",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "ZqU2fLolVv",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 10px 10px 20px",
                                "anchor": "",
                                "fontSize": "26px",
                                "color": "#4a3383",
                                "textAlign": "left",
                                "lineHeight": "140%",
                                "linkStyle": {
                                    "inherit": true,
                                    "linkColor": "#0000ee",
                                    "linkHoverColor": "#0000ee",
                                    "linkUnderline": true,
                                    "linkHoverUnderline": true
                                },
                                "displayCondition": null,
                                "_meta": {
                                    "htmlID": "u_content_text_22",
                                    "htmlClassNames": "u_content_text"
                                },
                                "selectable": true,
                                "draggable": true,
                                "duplicatable": true,
                                "deletable": true,
                                "hideable": true,
                                "text": "<p style=\"line-height: 140%;\"><span style=\"text-decoration: line-through; line-height: 36.4px;\">$39,900</span></p>"
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
                        "_meta": {
                            "htmlID": "u_row_24",
                            "htmlClassNames": "u_row"
                        },
                        "anchor": "",
                        "columns": false,
                        "padding": "0px",
                        "hideable": true,
                        "deletable": true,
                        "draggable": true,
                        "selectable": true,
                        "hideDesktop": false,
                        "duplicatable": true,
                        "backgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "size": "custom",
                            "repeat": "no-repeat",
                            "position": "top-center",
                            "fullWidth": true,
                            "customPosition": ["50%", "0%"]
                        },
                        "displayCondition": null,
                        "columnsBackgroundColor": ""
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
                                "src": {
                                    "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965161051-legal-document.png",
                                    "width": 70,
                                    "height": 70
                                },
                                "_meta": {
                                    "htmlID": "u_content_image_16",
                                    "htmlClassNames": "u_content_image"
                                },
                                "action": {
                                    "name": "web",
                                    "values": {
                                        "href": "",
                                        "target": "_blank"
                                    }
                                },
                                "anchor": "",
                                "altText": "",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "textAlign": "center",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
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
                                "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; background-color: #4a3383;\"><strong><span style=\"line-height: 35px; color: #ffffff;\">   FREE LAWYER REVIEW  </span></strong></span></p>",
                                "_meta": {
                                    "htmlID": "u_content_text_23",
                                    "htmlClassNames": "u_content_text"
                                },
                                "color": "#000",
                                "anchor": "",
                                "fontSize": "25px",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "linkStyle": {
                                    "inherit": true,
                                    "linkColor": "#00e",
                                    "linkUnderline": true,
                                    "linkHoverColor": "#00e",
                                    "linkHoverUnderline": true
                                },
                                "textAlign": "left",
                                "lineHeight": "140%",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
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
                        "_meta": {
                            "htmlID": "u_row_25",
                            "htmlClassNames": "u_row"
                        },
                        "columns": false,
                        "padding": "0px",
                        "hideable": true,
                        "deletable": true,
                        "draggable": true,
                        "selectable": true,
                        "hideDesktop": false,
                        "duplicatable": true,
                        "backgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "size": "custom",
                            "repeat": "no-repeat",
                            "position": "top-center",
                            "fullWidth": true,
                            "customPosition": ["50%", "0%"]
                        },
                        "displayCondition": null,
                        "columnsBackgroundColor": ""
                    }
                }, {
                    "id": "9XX-Qy1Say",
                    "cells": [1, 1],
                    "columns": [{
                        "id": "7Zk-nGfGnB",
                        "contents": [{
                            "id": "ZqOlsIHC0H",
                            "type": "image",
                            "values": {
                                "src": {
                                    "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965167297-10-percent.png",
                                    "width": 70,
                                    "height": 70,
                                    "autoWidth": false,
                                    "maxWidth": "26%"
                                },
                                "_meta": {
                                    "htmlID": "u_content_image_17",
                                    "htmlClassNames": "u_content_image"
                                },
                                "action": {
                                    "name": "web",
                                    "values": {
                                        "href": "",
                                        "target": "_blank"
                                    }
                                },
                                "anchor": "",
                                "altText": "",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "textAlign": "center",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "SGV3ya1u7b",
                            "type": "text",
                            "values": {
                                "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">ONLY 10%</span></strong></span></p>",
                                "_meta": {
                                    "htmlID": "u_content_text_25",
                                    "htmlClassNames": "u_content_text"
                                },
                                "color": "#843fa1",
                                "fontSize": "25px",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "linkStyle": {
                                    "inherit": true,
                                    "linkColor": "#00e",
                                    "linkUnderline": true,
                                    "linkHoverColor": "#00e",
                                    "linkHoverUnderline": true
                                },
                                "textAlign": "center",
                                "lineHeight": "140%",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "-QGmxFHWgN",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 10px 10px 20px",
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
                                "displayCondition": null,
                                "_meta": {
                                    "htmlID": "u_content_text_28",
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
                            "backgroundColor": "#e5b466",
                            "padding": "0px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_35",
                                "htmlClassNames": "u_column"
                            }
                        }
                    }, {
                        "id": "VUrK2S7eO9",
                        "contents": [{
                            "id": "loy9nMIeWq",
                            "type": "image",
                            "values": {
                                "src": {
                                    "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965172111-data-exchange.png",
                                    "width": 70,
                                    "height": 70,
                                    "autoWidth": false,
                                    "maxWidth": "26%"
                                },
                                "_meta": {
                                    "htmlID": "u_content_image_20",
                                    "htmlClassNames": "u_content_image"
                                },
                                "action": {
                                    "name": "web",
                                    "values": {
                                        "href": "",
                                        "target": "_blank"
                                    }
                                },
                                "altText": "",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "textAlign": "center",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "UnWo-m4MBn",
                            "type": "text",
                            "values": {
                                "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">FREE ASSIGNMENT</span></strong></span></p>",
                                "_meta": {
                                    "htmlID": "u_content_text_29",
                                    "htmlClassNames": "u_content_text"
                                },
                                "color": "#843fa1",
                                "fontSize": "25px",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "linkStyle": {
                                    "inherit": true,
                                    "linkColor": "#00e",
                                    "linkUnderline": true,
                                    "linkHoverColor": "#00e",
                                    "linkHoverUnderline": true
                                },
                                "textAlign": "center",
                                "lineHeight": "140%",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "ZV3et_e2I2",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 10px 10px 20px",
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
                                "displayCondition": null,
                                "_meta": {
                                    "htmlID": "u_content_text_30",
                                    "htmlClassNames": "u_content_text"
                                },
                                "selectable": true,
                                "draggable": true,
                                "duplicatable": true,
                                "deletable": true,
                                "hideable": true,
                                "text": "<p style=\"line-height: 100%;\"><span style=\"line-height: 15px;\">* Legal Fees Apply</span></p>"
                            }
                        }],
                        "values": {
                            "backgroundColor": "#e5b466",
                            "padding": "0px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_42",
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
                            "htmlID": "u_row_23",
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
                                "src": {
                                    "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965199851-deal.png",
                                    "width": 70,
                                    "height": 70,
                                    "autoWidth": false,
                                    "maxWidth": "26%"
                                },
                                "_meta": {
                                    "htmlID": "u_content_image_21",
                                    "htmlClassNames": "u_content_image"
                                },
                                "action": {
                                    "name": "web",
                                    "values": {
                                        "href": "",
                                        "target": "_blank"
                                    }
                                },
                                "anchor": "",
                                "altText": "",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "textAlign": "center",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "ud8Tv4HMxF",
                            "type": "text",
                            "values": {
                                "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">RIGHT TO LEASE</span></strong></span></p>",
                                "_meta": {
                                    "htmlID": "u_content_text_31",
                                    "htmlClassNames": "u_content_text"
                                },
                                "color": "#843fa1",
                                "fontSize": "25px",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "linkStyle": {
                                    "inherit": true,
                                    "linkColor": "#00e",
                                    "linkUnderline": true,
                                    "linkHoverColor": "#00e",
                                    "linkHoverUnderline": true
                                },
                                "textAlign": "center",
                                "lineHeight": "140%",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "KudnK6wCa4",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 10px 10px 20px",
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
                            "backgroundColor": "#e5b466",
                            "padding": "0px 0px 10px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_49",
                                "htmlClassNames": "u_column"
                            }
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
                                "displayCondition": null,
                                "_meta": {
                                    "htmlID": "u_content_divider_7",
                                    "htmlClassNames": "u_content_divider"
                                },
                                "selectable": true,
                                "draggable": true,
                                "duplicatable": true,
                                "deletable": true,
                                "hideable": true
                            }
                        }, {
                            "id": "VyaCwU--OJ",
                            "type": "image",
                            "values": {
                                "src": {
                                    "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698965193214-hand.png",
                                    "width": 70,
                                    "height": 70,
                                    "autoWidth": false,
                                    "maxWidth": "26%"
                                },
                                "_meta": {
                                    "htmlID": "u_content_image_22",
                                    "htmlClassNames": "u_content_image"
                                },
                                "action": {
                                    "name": "web",
                                    "values": {
                                        "href": "",
                                        "target": "_blank"
                                    }
                                },
                                "altText": "",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "textAlign": "center",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "qyZlwZfsOi",
                            "type": "text",
                            "values": {
                                "text": "<p style=\"line-height: 140%;\"><span style=\"line-height: 35px; color: #4a3383;\"><strong><span style=\"line-height: 35px;\">$8,500</span></strong></span></p>",
                                "_meta": {
                                    "htmlID": "u_content_text_33",
                                    "htmlClassNames": "u_content_text"
                                },
                                "color": "#843fa1",
                                "fontSize": "25px",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "linkStyle": {
                                    "inherit": true,
                                    "linkColor": "#00e",
                                    "linkUnderline": true,
                                    "linkHoverColor": "#00e",
                                    "linkHoverUnderline": true
                                },
                                "textAlign": "center",
                                "lineHeight": "140%",
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "10px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "cuMvb3JdQs",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 10px 10px 20px",
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
                                "text": "<p style=\"line-height: 100%;\"><span style=\"line-height: 15px;\">Capped Development Charges</span></p>"
                            }
                        }],
                        "values": {
                            "backgroundColor": "#e5b466",
                            "padding": "0px 0px 10px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_50",
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
                            "backgroundColor": "",
                            "padding": "0px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_52",
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
                                "text": "<p style=\"line-height: 100%;\">Where</p>"
                            }
                        }, {
                            "id": "Fgu1wiWxv2",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 10px",
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
                                "text": "<p style=\"line-height: 100%;\"><strong><span style=\"line-height: 71px; color: #4a3383;\">Joy</span></strong> Meets the Water's Edge</p>"
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
                                        "href": "",
                                        "target": "_blank"
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
                                "calculatedWidth": 279,
                                "calculatedHeight": 47,
                                "_override": {
                                    "mobile": {
                                        "size": {
                                            "autoWidth": false,
                                            "width": "100%"
                                        }
                                    }
                                }
                            }
                        }],
                        "values": {
                            "backgroundColor": "#e5b466",
                            "padding": "0px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_53",
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
                                    "url": "https://editor.ne16.com/condos/Video-tour.jpg",
                                    "width": 1361,
                                    "height": 628
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
                    "id": "icI9LBoWmr",
                    "cells": [1],
                    "columns": [{
                        "id": "owvo1FG8T3",
                        "contents": [{
                            "id": "32exqtl4of",
                            "type": "heading",
                            "values": {
                                "containerPadding": "20px 10px 10px",
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
                                "text": "Get in Touch With a Pre Construction Expert Now"
                            }
                        }],
                        "values": {
                            "backgroundColor": "#4a3383",
                            "padding": "0px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_57",
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
                            "htmlID": "u_row_33",
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
                            "id": "UTKHUAJhA4",
                            "type": "heading",
                            "values": {
                                "containerPadding": "10px",
                                "anchor": "",
                                "headingType": "h2",
                                "fontSize": "38px",
                                "color": "#e5b466",
                                "textAlign": "center",
                                "lineHeight": "110%",
                                "linkStyle": {
                                    "inherit": true,
                                    "linkColor": "#0000ee",
                                    "linkHoverColor": "#0000ee",
                                    "linkUnderline": true,
                                    "linkHoverUnderline": true
                                },
                                "displayCondition": null,
                                "_meta": {
                                    "htmlID": "u_content_heading_6",
                                    "htmlClassNames": "u_content_heading"
                                },
                                "selectable": true,
                                "draggable": true,
                                "duplicatable": true,
                                "deletable": true,
                                "hideable": true,
                                "text": "sales@thecondocollection.ca"
                            }
                        }],
                        "values": {
                            "backgroundColor": "#4a3383",
                            "padding": "0px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_58",
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
                                "src": {
                                    "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698964208954-531067.png",
                                    "width": 500,
                                    "height": 500
                                },
                                "_meta": {
                                    "htmlID": "u_content_image_25",
                                    "htmlClassNames": "u_content_image"
                                },
                                "action": {
                                    "name": "web",
                                    "values": {
                                        "href": "",
                                        "target": "_blank"
                                    }
                                },
                                "anchor": "",
                                "altText": "Image",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "textAlign": "center",
                                "hideMobile": false,
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "30px 30px 0px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "lTvCfd_WAL",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 10px",
                                "fontSize": "27px",
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
                                "text": "<p style=\"line-height: 140%;\">Daniel Foti</p>"
                            }
                        }, {
                            "id": "gzKmhT9zmC",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px",
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
                                "text": "<p style=\"line-height: 140%;\">Sales Representative</p>"
                            }
                        }, {
                            "id": "T4R7O3Vbal",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px",
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
                                "text": "<p style=\"line-height: 140%;\">D|G Realty Team</p>\n<p style=\"line-height: 140%;\"><strong>Re/Max Experts</strong></p>"
                            }
                        }, {
                            "id": "mhjUM9z7-E",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px",
                                "fontSize": "22px",
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
                                "text": "<div>647-628-3684</div>"
                            }
                        }],
                        "values": {
                            "_meta": {
                                "htmlID": "u_column_55",
                                "htmlClassNames": "u_column"
                            },
                            "border": {},
                            "padding": "0px",
                            "backgroundColor": "#4a3383"
                        }
                    }, {
                        "id": "hQViQqbAc9",
                        "contents": [{
                            "id": "EFveykpaK4",
                            "type": "image",
                            "values": {
                                "src": {
                                    "url": "https://condocollection.s3.ca-central-1.amazonaws.com/1698964192832-376897.png",
                                    "width": 401,
                                    "height": 401
                                },
                                "_meta": {
                                    "htmlID": "u_content_image_26",
                                    "htmlClassNames": "u_content_image"
                                },
                                "action": {
                                    "name": "web",
                                    "values": {
                                        "href": "",
                                        "target": "_blank"
                                    }
                                },
                                "anchor": "",
                                "altText": "Image",
                                "hideable": true,
                                "deletable": true,
                                "draggable": true,
                                "textAlign": "center",
                                "hideMobile": false,
                                "selectable": true,
                                "hideDesktop": false,
                                "duplicatable": true,
                                "containerPadding": "30px 30px 0px",
                                "displayCondition": null
                            }
                        }, {
                            "id": "T6eiaurWJQ",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px 10px",
                                "fontSize": "27px",
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
                                "text": "<p style=\"line-height: 140%;\">Matthew Campoli, B.A.</p>"
                            }
                        }, {
                            "id": "y8BHFXtWYJ",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px",
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
                                "text": "<p style=\"line-height: 140%;\">Sales Representative</p>"
                            }
                        }, {
                            "id": "Binxp8s-dq",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px",
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
                                "text": "<p style=\"line-height: 140%;\">RSDNCY. Group</p>\n<p style=\"line-height: 140%;\">EXP Realty</p>"
                            }
                        }, {
                            "id": "p2rQOd06eS",
                            "type": "text",
                            "values": {
                                "containerPadding": "0px",
                                "fontSize": "22px",
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
                                "text": "<p style=\"line-height: 140%;\"> 416-371-5793</p>"
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
                        "_meta": {
                            "htmlID": "u_row_32",
                            "htmlClassNames": "u_row"
                        },
                        "anchor": "",
                        "columns": false,
                        "padding": "0px",
                        "hideable": true,
                        "deletable": true,
                        "draggable": true,
                        "hideMobile": false,
                        "selectable": true,
                        "hideDesktop": false,
                        "duplicatable": true,
                        "noStackMobile": false,
                        "backgroundColor": "",
                        "backgroundImage": {
                            "url": "",
                            "size": "custom",
                            "repeat": "no-repeat",
                            "position": "top-center",
                            "fullWidth": true,
                            "customPosition": ["50%", "0%"]
                        },
                        "displayCondition": null,
                        "columnsBackgroundColor": "#fff"
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
                        "label": "Lato",
                        "value": "'Lato',sans-serif",
                        "url": "https://fonts.googleapis.com/css?family=Lato:400,700",
                        "weights": [400, 700],
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

}