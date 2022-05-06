
class BackgroundSetter {
    constructor() {
        let backgrounds_by_element = [];
        let images_by_element = [];
        let trigger = 'bgSetter';
        let img_selector = 'picture img.img_in_picture';
        this.init = function () {
            let observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting === false)
                        return;
                    let element = entry.target;
                    let actual_data = {
                        'element': [],
                        'data': []
                    };
                    if (element.getAttribute('data-backgrounds') != null) {
                        let backgrounds = element.getAttribute('data-backgrounds').split(',');
                        let sizes = element.getAttribute('data-sizes').split(',');
                        let positions = element.getAttribute('data-positions').split(',');
                        if (backgrounds.length == 1) {
                            this.setBackground(backgrounds[0], sizes[0], positions[0], element);
                            element.classList.remove(trigger);
                        } else {
                            actual_data['element'] = element;
                            let viewports = element.getAttribute('data-viewports').split(',');
                            viewports.forEach((viewport, index) => {
                                let viewport_data = {
                                    'viewport': viewport,
                                    'background': backgrounds[index],
                                    'size': sizes[index],
                                    'position': positions[index]
                                };
                                actual_data['data'].push(viewport_data);
                            });
                            backgrounds_by_element.push(actual_data);
                        }
                    } else {
                        element.classList.remove(trigger);
                    }

                    let images = document.querySelectorAll(img_selector);
                    images.forEach((element) => {
                        let actual_data = {
                            'element': [],
                            'data': []
                        };
                        let picture = element.closest('picture');
                        let sources = picture.querySelectorAll('source');
                        if (sources.length > 0) {
                            actual_data['element'] = element;
                            sources.forEach((s) => {
                                let viewport_data = {
                                    'viewport': parseInt(s.getAttribute('data-viewport')),
                                    'image': s.getAttribute('srcset'),
                                    'size': s.style.objectFit,
                                    'position': s.getAttribute('align'),
                                    'width': s.getAttribute('width'),
                                    'height': s.getAttribute('height'),
                                    'intrinsicsize': s.getAttribute('intrinsicsize')
                                };
                                actual_data['data'].push(viewport_data);
                            });
                            let viewport_data = {
                                'viewport': 0,
                                'image': element.getAttribute('srcset'),
                                'size': element.style.objectFit,
                                'position': element.getAttribute('align')
                            };
                            actual_data['data'].push(viewport_data);
                            actual_data['data'].reverse();
                            images_by_element.push(actual_data);
                        }
                    });

                    this.checkBackgrounds();
                    observer.unobserve(element);
                });
            });
            let elements = document.querySelectorAll('.' + trigger);
            elements.forEach((element) => {
                observer.observe(element);
            });
            document.querySelector(window).resize(function () {
                this.checkBackgrounds();
            }.bind(this));
        };
        this.setBackground = function (background, size, position, element) {
            element.style.backgroundImage = 'url(' + background + ')';
            element.style.backgroundSize = size;
            element.style.backgroundPosition = position;
        };
        this.checkBackgrounds = function () {
            let viewport = this.getViewPort();
            backgrounds_by_element.forEach(element_data => {
                let background = '', size = '', position = '';
                element_data['data'].forEach((background_data, index) => {
                    if (index == 0) {
                        background = background_data.background;
                        size = background_data.size;
                        position = background_data.position;
                    } else if (viewport.width > element_data['data'][index - 1].viewport) {
                        background = background_data.background;
                        size = background_data.size;
                        position = background_data.position;
                    }
                });
                this.setBackground(background, size, position, element_data['element']);
            });
            images_by_element.forEach(element_data => {
                let size = '', position = '', width = '', height = '', intrinsicsize = '';
                element_data['data'].forEach((image_data, index) => {
                    if (index == 0) {
                        size = image_data.size;
                        width = element_data['element'].getAttribute('data-width');
                        height = element_data['element'].getAttribute('data-height');
                        intrinsicsize = element_data['element'].getAttribute('data-intrinsicsize');
                        position = image_data.position;
                    } else if (viewport.width > image_data.viewport) {
                        size = image_data.size;
                        width = image_data.width;
                        height = image_data.height;
                        intrinsicsize = image_data.intrinsicsize;
                        position = image_data.position;
                    }
                });
                element_data['element'].setAttribute('align', position);
                element_data['element'].setAttribute('width', width);
                element_data['element'].setAttribute('height', height);
                element_data['element'].setAttribute('intrinsicsize', intrinsicsize);
                element_data['element'].style.objectFit = size;
            });
        };
        this.getViewPort = function () {
            var e = window, a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        };
    }
}

export default() => {
    /*let background_manager = new BackgroundSetter();
    background_manager.init();*/
}