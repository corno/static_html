import * as p_ from 'pareto-core/transformer'

// schemas
import * as s_source from "../schema.js"
import * as s_target from "astn-core/modules/serialization/schemas/sealed_target/schema"

// serializer dependencies
import * as ser_primitives from "liana-core/modules/serialization/schemas/primitives/serializers"

export namespace declarations {
    
    export type Document = p_.Transformer<
        s_source.Document,
        s_target.Value
    >
    
    export type Root = p_.Transformer<
        s_source.Root,
        s_target.Value
    >
    
    export type Flow_Element = p_.Transformer<
        s_source.Flow_Element,
        s_target.Value
    >
    
    export type Flow_Content = p_.Transformer<
        s_source.Flow_Content,
        s_target.Value
    >
    
    export type Classes = p_.Transformer<
        s_source.Classes,
        s_target.Value
    >
    
    export type Phrasing_Content = p_.Transformer<
        s_source.Phrasing_Content,
        s_target.Value
    >
    
    export type Phrasing_Element = p_.Transformer<
        s_source.Phrasing_Element,
        s_target.Value
    >
}

// implementations

export const Document: declarations.Document = (
    $,
) => ['group', ['verbose', p_.literal.dictionary({
    "css": p_.change_context(
        $['css'],
        (
            $,
        ) => ['text', {
            'delimiter': ['quote', null],
            'value': $,
        }],
    ),
    "root": p_.change_context(
        $['root'],
        (
            $,
        ) => Flow_Element(
            $,
        ),
    ),
})]]

export const Root: declarations.Root = (
    $,
) => Document(
    $,
)

export const Flow_Element: declarations.Flow_Element = (
    $,
) => ['state', p_.from.state($).decide(
    (
        $,
    ): s_target.Value.state => {
        switch ($[0]) {
            case 'div': return p_.option($, (
                $,
            ) => ({
                'option': 'div',
                'value': Flow_Content(
                    $,
                ),
            }))
            case 'dimensioned div': return p_.option($, (
                $,
            ) => ({
                'option': 'dimensioned div',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "width": p_.change_context(
                        $['width'],
                        (
                            $,
                        ) => ['optional', p_.from.optional($).decide(
                            (
                                $,
                            ): s_target.Value.optional => ['set', ['text', {
                                'delimiter': ['none', null],
                                'value': ser_primitives.decimal(
                                    $,
                                ),
                            }]],
                            (): s_target.Value.optional => ['not set', null],
                        )],
                    ),
                    "height": p_.change_context(
                        $['height'],
                        (
                            $,
                        ) => ['optional', p_.from.optional($).decide(
                            (
                                $,
                            ): s_target.Value.optional => ['set', ['text', {
                                'delimiter': ['none', null],
                                'value': ser_primitives.decimal(
                                    $,
                                ),
                            }]],
                            (): s_target.Value.optional => ['not set', null],
                        )],
                    ),
                    "content": p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Flow_Content(
                            $,
                        ),
                    ),
                })]],
            }))
            case 'classified div': return p_.option($, (
                $,
            ) => ({
                'option': 'classified div',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "classes": p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                        ),
                    ),
                    "content": p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Flow_Content(
                            $,
                        ),
                    ),
                })]],
            }))
            case 'table': return p_.option($, (
                $,
            ) => ({
                'option': 'table',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "classes": p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                        ),
                    ),
                    "sections": p_.change_context(
                        $['sections'],
                        (
                            $,
                        ) => ['list', p_.from.list($).map(
                            (
                                $,
                            ) => ['group', ['verbose', p_.literal.dictionary({
                                "classes": p_.change_context(
                                    $['classes'],
                                    (
                                        $,
                                    ) => Classes(
                                        $,
                                    ),
                                ),
                                "type": p_.change_context(
                                    $['type'],
                                    (
                                        $,
                                    ) => ['state', p_.from.state($).decide(
                                        (
                                            $,
                                        ): s_target.Value.state => {
                                            switch ($[0]) {
                                                case 'header': return p_.option($, (
                                                    $,
                                                ) => ({
                                                    'option': 'header',
                                                    'value': ['nothing', null],
                                                }))
                                                case 'body': return p_.option($, (
                                                    $,
                                                ) => ({
                                                    'option': 'body',
                                                    'value': ['nothing', null],
                                                }))
                                                case 'footer': return p_.option($, (
                                                    $,
                                                ) => ({
                                                    'option': 'footer',
                                                    'value': ['nothing', null],
                                                }))
                                                default: return p_.exhaustive($[0])
                                            }
                                        },
                                    )],
                                ),
                                "rows": p_.change_context(
                                    $['rows'],
                                    (
                                        $,
                                    ) => ['list', p_.from.list($).map(
                                        (
                                            $,
                                        ) => ['group', ['verbose', p_.literal.dictionary({
                                            "classes": p_.change_context(
                                                $['classes'],
                                                (
                                                    $,
                                                ) => Classes(
                                                    $,
                                                ),
                                            ),
                                            "height": p_.change_context(
                                                $['height'],
                                                (
                                                    $,
                                                ) => ['optional', p_.from.optional($).decide(
                                                    (
                                                        $,
                                                    ): s_target.Value.optional => ['set', ['text', {
                                                        'delimiter': ['none', null],
                                                        'value': ser_primitives.decimal(
                                                            $,
                                                        ),
                                                    }]],
                                                    (): s_target.Value.optional => ['not set', null],
                                                )],
                                            ),
                                            "cells": p_.change_context(
                                                $['cells'],
                                                (
                                                    $,
                                                ) => ['list', p_.from.list($).map(
                                                    (
                                                        $,
                                                    ) => ['group', ['verbose', p_.literal.dictionary({
                                                        "type": p_.change_context(
                                                            $['type'],
                                                            (
                                                                $,
                                                            ) => ['state', p_.from.state($).decide(
                                                                (
                                                                    $,
                                                                ): s_target.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'th': return p_.option($, (
                                                                            $,
                                                                        ) => ({
                                                                            'option': 'th',
                                                                            'value': ['nothing', null],
                                                                        }))
                                                                        case 'td': return p_.option($, (
                                                                            $,
                                                                        ) => ({
                                                                            'option': 'td',
                                                                            'value': ['nothing', null],
                                                                        }))
                                                                        default: return p_.exhaustive($[0])
                                                                    }
                                                                },
                                                            )],
                                                        ),
                                                        "colspan": p_.change_context(
                                                            $['colspan'],
                                                            (
                                                                $,
                                                            ) => ['optional', p_.from.optional($).decide(
                                                                (
                                                                    $,
                                                                ): s_target.Value.optional => ['set', ['text', {
                                                                    'delimiter': ['none', null],
                                                                    'value': ser_primitives.decimal(
                                                                        $,
                                                                    ),
                                                                }]],
                                                                (): s_target.Value.optional => ['not set', null],
                                                            )],
                                                        ),
                                                        "classes": p_.change_context(
                                                            $['classes'],
                                                            (
                                                                $,
                                                            ) => Classes(
                                                                $,
                                                            ),
                                                        ),
                                                        "content": p_.change_context(
                                                            $['content'],
                                                            (
                                                                $,
                                                            ) => Flow_Content(
                                                                $,
                                                            ),
                                                        ),
                                                    })]],
                                                )],
                                            ),
                                        })]],
                                    )],
                                ),
                            })]],
                        )],
                    ),
                })]],
            }))
            case 'span': return p_.option($, (
                $,
            ) => ({
                'option': 'span',
                'value': Phrasing_Content(
                    $,
                ),
            }))
            case 'label': return p_.option($, (
                $,
            ) => ({
                'option': 'label',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "classes": p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                        ),
                    ),
                    "text": p_.change_context(
                        $['text'],
                        (
                            $,
                        ) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    ),
                    "content": p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Flow_Content(
                            $,
                        ),
                    ),
                })]],
            }))
            case 'img': return p_.option($, (
                $,
            ) => ({
                'option': 'img',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "classes": p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                        ),
                    ),
                    "src": p_.change_context(
                        $['src'],
                        (
                            $,
                        ) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    ),
                    "alt": p_.change_context(
                        $['alt'],
                        (
                            $,
                        ) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    ),
                    "width": p_.change_context(
                        $['width'],
                        (
                            $,
                        ) => ['optional', p_.from.optional($).decide(
                            (
                                $,
                            ): s_target.Value.optional => ['set', ['text', {
                                'delimiter': ['none', null],
                                'value': ser_primitives.decimal(
                                    $,
                                ),
                            }]],
                            (): s_target.Value.optional => ['not set', null],
                        )],
                    ),
                    "height": p_.change_context(
                        $['height'],
                        (
                            $,
                        ) => ['optional', p_.from.optional($).decide(
                            (
                                $,
                            ): s_target.Value.optional => ['set', ['text', {
                                'delimiter': ['none', null],
                                'value': ser_primitives.decimal(
                                    $,
                                ),
                            }]],
                            (): s_target.Value.optional => ['not set', null],
                        )],
                    ),
                })]],
            }))
            default: return p_.exhaustive($[0])
        }
    },
)]

export const Flow_Content: declarations.Flow_Content = (
    $,
) => ['list', p_.from.list($).map(
    (
        $,
    ) => Flow_Element(
        $,
    ),
)]

export const Classes: declarations.Classes = (
    $,
) => ['list', p_.from.list($).map(
    (
        $,
    ) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }],
)]

export const Phrasing_Content: declarations.Phrasing_Content = (
    $,
) => ['list', p_.from.list($).map(
    (
        $,
    ) => Phrasing_Element(
        $,
    ),
)]

export const Phrasing_Element: declarations.Phrasing_Element = (
    $,
) => ['state', p_.from.state($).decide(
    (
        $,
    ): s_target.Value.state => {
        switch ($[0]) {
            case 'span': return p_.option($, (
                $,
            ) => ({
                'option': 'span',
                'value': Phrasing_Content(
                    $,
                ),
            }))
            case 'classified span': return p_.option($, (
                $,
            ) => ({
                'option': 'classified span',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "classes": p_.change_context(
                        $['classes'],
                        (
                            $,
                        ) => Classes(
                            $,
                        ),
                    ),
                    "content": p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Phrasing_Content(
                            $,
                        ),
                    ),
                })]],
            }))
            case 'titled span': return p_.option($, (
                $,
            ) => ({
                'option': 'titled span',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "title": p_.change_context(
                        $['title'],
                        (
                            $,
                        ) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    ),
                    "content": p_.change_context(
                        $['content'],
                        (
                            $,
                        ) => Phrasing_Content(
                            $,
                        ),
                    ),
                })]],
            }))
            case 'a': return p_.option($, (
                $,
            ) => ({
                'option': 'a',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "text": p_.change_context(
                        $['text'],
                        (
                            $,
                        ) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    ),
                    "href": p_.change_context(
                        $['href'],
                        (
                            $,
                        ) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    ),
                })]],
            }))
            case 'p': return p_.option($, (
                $,
            ) => ({
                'option': 'p',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "text": p_.change_context(
                        $['text'],
                        (
                            $,
                        ) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    ),
                })]],
            }))
            default: return p_.exhaustive($[0])
        }
    },
)]
