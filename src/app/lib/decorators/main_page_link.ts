/**
 * Repository with all classes anotaded with {@link MainPageLink}
 */
export var MainPageLinksRepository = [];

/**
 * Represents page components that will have a link into
 * main page.
 */
export function MainPageLink(_props) {
    return (cls) => {
        _props['cls'] = cls
        MainPageLinksRepository.push(_props);
    };
};