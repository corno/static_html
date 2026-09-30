import * as p_ from 'pareto-core/refiner'

// schemas
import * as s_target from "../schema.js"
import * as s_source from "../../unresolved/schema.js"
import * as s_error from "liana-core/modules/resolved_document_deserialization/schemas/resolving/schema"

export namespace declarations {
    
    export type Document = p_.Refiner<
        s_target.Document,
        s_error.Error,
        s_source.Document
    >
    
    export type Root = p_.Refiner<
        s_target.Root,
        s_error.Error,
        s_source.Root
    >
    
    export type Flow_Element = p_.Refiner<
        s_target.Flow_Element,
        s_error.Error,
        s_source.Flow_Element
    >
    
    export type Flow_Content = p_.Refiner<
        s_target.Flow_Content,
        s_error.Error,
        s_source.Flow_Content
    >
    
    export type Classes = p_.Refiner<
        s_target.Classes,
        s_error.Error,
        s_source.Classes
    >
    
    export type Phrasing_Content = p_.Refiner<
        s_target.Phrasing_Content,
        s_error.Error,
        s_source.Phrasing_Content
    >
    
    export type Phrasing_Element = p_.Refiner<
        s_target.Phrasing_Element,
        s_error.Error,
        s_source.Phrasing_Element
    >
}

// implementations

export const Document: declarations.Document = (
    $,
    abort,
) => ({
    'css': p_.change_context(
        $['css'],
        (
            $,
        ) => $,
    ),
    'root': p_.change_context(
        $['root'],
        (
            $,
        ) => Flow_Element(
            $,
            abort,
        ),
    ),
})

export const Root: declarations.Root = (
    $,
    abort,
) => Document(
    $,
    abort,
)

export const Flow_Element: declarations.Flow_Element = (
    $,
    abort,
) => p_.from.state($).decide(
    (
        $,
    ): s_target.Flow_Element => {
        switch ($[0]) {
            case 'div': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['div', Flow_Content(
                    $,
                    abort,
                )],
            ))
            case 'dimensioned div': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['dimensioned div', {
                    'width': p_.change_context(
                        $['width'],
                        (
                            $,
                        ) => p_.from.optional($).map(
                            (
                                $,
                            ) => $,
                        ),
                    ),
                    'height': p_.change_context(
                        $['height'],
                        (
                            $,
                        ) => p_.from.optional($).map(
                            (
                                $,
                            ) => $,
                        ),
                    ),
                    'content': p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Flow_Content(
                            $,
                            abort,
                        ),
                    ),
                }],
            ))
            case 'classified div': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['classified div', {
                    'classes': p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                            abort,
                        ),
                    ),
                    'content': p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Flow_Content(
                            $,
                            abort,
                        ),
                    ),
                }],
            ))
            case 'table': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['table', {
                    'classes': p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                            abort,
                        ),
                    ),
                    'sections': p_.change_context(
                        $['sections'],
                        (
                            $,
                        ) => p_.from.list($).map(
                            (
                                $,
                            ) => ({
                                'classes': p_.change_context(
                                    $['classes'],
                                    (
                                        $,
                                    ) => Classes(
                                        $,
                                        abort,
                                    ),
                                ),
                                'type': p_.change_context(
                                    $['type'],
                                    (
                                        $,
                                    ) => p_.from.state($).decide(
                                        (
                                            $,
                                        ): s_target.Flow_Element.table.sections.L.type_ => {
                                            switch ($[0]) {
                                                case 'header': return p_.option($, (
                                                    $,
                                                ) => p_.change_context(
                                                    $,
                                                    (
                                                        $,
                                                    ) => ['header', null],
                                                ))
                                                case 'body': return p_.option($, (
                                                    $,
                                                ) => p_.change_context(
                                                    $,
                                                    (
                                                        $,
                                                    ) => ['body', null],
                                                ))
                                                case 'footer': return p_.option($, (
                                                    $,
                                                ) => p_.change_context(
                                                    $,
                                                    (
                                                        $,
                                                    ) => ['footer', null],
                                                ))
                                                default: return p_.exhaustive($[0])
                                            }
                                        },
                                    ),
                                ),
                                'rows': p_.change_context(
                                    $['rows'],
                                    (
                                        $,
                                    ) => p_.from.list($).map(
                                        (
                                            $,
                                        ) => ({
                                            'classes': p_.change_context(
                                                $['classes'],
                                                (
                                                    $,
                                                ) => Classes(
                                                    $,
                                                    abort,
                                                ),
                                            ),
                                            'height': p_.change_context(
                                                $['height'],
                                                (
                                                    $,
                                                ) => p_.from.optional($).map(
                                                    (
                                                        $,
                                                    ) => $,
                                                ),
                                            ),
                                            'cells': p_.change_context(
                                                $['cells'],
                                                (
                                                    $,
                                                ) => p_.from.list($).map(
                                                    (
                                                        $,
                                                    ) => ({
                                                        'type': p_.change_context(
                                                            $['type'],
                                                            (
                                                                $,
                                                            ) => p_.from.state($).decide(
                                                                (
                                                                    $,
                                                                ): s_target.Flow_Element.table.sections.L.rows.L.cells.L.type_ => {
                                                                    switch ($[0]) {
                                                                        case 'th': return p_.option($, (
                                                                            $,
                                                                        ) => p_.change_context(
                                                                            $,
                                                                            (
                                                                                $,
                                                                            ) => ['th', null],
                                                                        ))
                                                                        case 'td': return p_.option($, (
                                                                            $,
                                                                        ) => p_.change_context(
                                                                            $,
                                                                            (
                                                                                $,
                                                                            ) => ['td', null],
                                                                        ))
                                                                        default: return p_.exhaustive($[0])
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                        'colspan': p_.change_context(
                                                            $['colspan'],
                                                            (
                                                                $,
                                                            ) => p_.from.optional($).map(
                                                                (
                                                                    $,
                                                                ) => $,
                                                            ),
                                                        ),
                                                        'classes': p_.change_context(
                                                            $['classes'],
                                                            (
                                                                $,
                                                            ) => Classes(
                                                                $,
                                                                abort,
                                                            ),
                                                        ),
                                                        'content': p_.change_context(
                                                            $['content'],
                                                            (
                                                                $,
                                                            ) => Flow_Content(
                                                                $,
                                                                abort,
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                            }),
                        ),
                    ),
                }],
            ))
            case 'span': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['span', Phrasing_Content(
                    $,
                    abort,
                )],
            ))
            case 'label': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['label', {
                    'classes': p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                            abort,
                        ),
                    ),
                    'text': p_.change_context(
                        $['text'],
                        (
                            $,
                        ) => $,
                    ),
                    'content': p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Flow_Content(
                            $,
                            abort,
                        ),
                    ),
                }],
            ))
            case 'img': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['img', {
                    'classes': p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                            abort,
                        ),
                    ),
                    'src': p_.change_context(
                        $['src'],
                        (
                            $,
                        ) => $,
                    ),
                    'alt': p_.change_context(
                        $['alt'],
                        (
                            $,
                        ) => $,
                    ),
                    'width': p_.change_context(
                        $['width'],
                        (
                            $,
                        ) => p_.from.optional($).map(
                            (
                                $,
                            ) => $,
                        ),
                    ),
                    'height': p_.change_context(
                        $['height'],
                        (
                            $,
                        ) => p_.from.optional($).map(
                            (
                                $,
                            ) => $,
                        ),
                    ),
                }],
            ))
            default: return p_.exhaustive($[0])
        }
    },
)

export const Flow_Content: declarations.Flow_Content = (
    $,
    abort,
) => p_.from.list($).map(
    (
        $,
    ) => Flow_Element(
        $,
        abort,
    ),
)

export const Classes: declarations.Classes = (
    $,
    abort,
) => p_.from.list($).map(
    (
        $,
    ) => $,
)

export const Phrasing_Content: declarations.Phrasing_Content = (
    $,
    abort,
) => p_.from.list($).map(
    (
        $,
    ) => Phrasing_Element(
        $,
        abort,
    ),
)

export const Phrasing_Element: declarations.Phrasing_Element = (
    $,
    abort,
) => p_.from.state($).decide(
    (
        $,
    ): s_target.Phrasing_Element => {
        switch ($[0]) {
            case 'span': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['span', Phrasing_Content(
                    $,
                    abort,
                )],
            ))
            case 'classified span': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['classified span', {
                    'classes': p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                            abort,
                        ),
                    ),
                    'content': p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Phrasing_Content(
                            $,
                            abort,
                        ),
                    ),
                }],
            ))
            case 'titled span': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['titled span', {
                    'title': p_.change_context(
                        $['title'],
                        (
                            $,
                        ) => $,
                    ),
                    'content': p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Phrasing_Content(
                            $,
                            abort,
                        ),
                    ),
                }],
            ))
            case 'a': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['a', {
                    'text': p_.change_context(
                        $['text'],
                        (
                            $,
                        ) => $,
                    ),
                    'href': p_.change_context(
                        $['href'],
                        (
                            $,
                        ) => $,
                    ),
                }],
            ))
            case 'p': return p_.option($, (
                $,
            ) => p_.change_context(
                $,
                (
                    $,
                ) => ['p', {
                    'text': p_.change_context(
                        $['text'],
                        (
                            $,
                        ) => $,
                    ),
                }],
            ))
            default: return p_.exhaustive($[0])
        }
    },
)
