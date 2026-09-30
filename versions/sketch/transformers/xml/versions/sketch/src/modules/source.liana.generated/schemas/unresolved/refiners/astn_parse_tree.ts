import * as p_ from 'pareto-core/refiner'

// schemas
import * as s_target from "../schema.js"
import * as s_source from "astn-core/modules/deserialization/schemas/parse_tree/schema"
import * as s_error from "liana-core/modules/value_unmarshalling/schemas/unmarshalling/schema"

// refiner dependencies
import * as r_unmarshalled_from_parse_tree from "liana-core/modules/value_unmarshalling/schemas/unmarshalled_value/refiners/astn_parse_tree"

export namespace declarations {
    
    export type Document = p_.Refiner<
        s_target.Document,
        s_error.Error,
        s_source.Value
    >
    
    export type Root = p_.Refiner<
        s_target.Root,
        s_error.Error,
        s_source.Value
    >
    
    export type Flow_Element = p_.Refiner<
        s_target.Flow_Element,
        s_error.Error,
        s_source.Value
    >
    
    export type Flow_Content = p_.Refiner<
        s_target.Flow_Content,
        s_error.Error,
        s_source.Value
    >
    
    export type Classes = p_.Refiner<
        s_target.Classes,
        s_error.Error,
        s_source.Value
    >
    
    export type Phrasing_Content = p_.Refiner<
        s_target.Phrasing_Content,
        s_error.Error,
        s_source.Value
    >
    
    export type Phrasing_Element = p_.Refiner<
        s_target.Phrasing_Element,
        s_error.Error,
        s_source.Value
    >
}

// implementations

export const Document: declarations.Document = (
    $,
    abort,
) => p_.change_context(
    r_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        abort,
        {
            'expected properties': p_.literal.dictionary({
                "css": null,
                "root": null,
            }),
        },
    ),
    (
        $,
    ) => ({
        'css': p_.change_context(
            r_unmarshalled_from_parse_tree.Property(
                $,
                abort,
                {
                    'id': 'css',
                },
            ),
            (
                $,
            ) => r_unmarshalled_from_parse_tree.Text(
                $,
                abort,
            ),
        ),
        'root': p_.change_context(
            r_unmarshalled_from_parse_tree.Property(
                $,
                abort,
                {
                    'id': 'root',
                },
            ),
            (
                $,
            ) => Flow_Element(
                $,
                abort,
            ),
        ),
    }),
)

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
) => p_.change_context(
    r_unmarshalled_from_parse_tree.State(
        $,
        abort,
    ),
    (
        $,
    ) => p_.from.text($['option']['token']['value']).to_state(
        (
            $text,
        ): s_target.Flow_Element => {
            switch ($text) {
                case "div": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['div', Flow_Content(
                        $,
                        abort,
                    )],
                )
                case "dimensioned div": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['dimensioned div', p_.change_context(
                        r_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
                                    "width": null,
                                    "height": null,
                                    "content": null,
                                }),
                            },
                        ),
                        (
                            $,
                        ) => ({
                            'width': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'width',
                                    },
                                ),
                                (
                                    $,
                                ) => p_.from.optional(r_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    abort,
                                )['optional']).map(
                                    (
                                        $,
                                    ) => r_unmarshalled_from_parse_tree.Number(
                                        $,
                                        abort,
                                        {
                                            'type': ['decimal', null],
                                        },
                                    ),
                                ),
                            ),
                            'height': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'height',
                                    },
                                ),
                                (
                                    $,
                                ) => p_.from.optional(r_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    abort,
                                )['optional']).map(
                                    (
                                        $,
                                    ) => r_unmarshalled_from_parse_tree.Number(
                                        $,
                                        abort,
                                        {
                                            'type': ['decimal', null],
                                        },
                                    ),
                                ),
                            ),
                            'content': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'content',
                                    },
                                ),
                                (
                                    $,
                                ) => Flow_Content(
                                    $,
                                    abort,
                                ),
                            ),
                        }),
                    )],
                )
                case "classified div": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['classified div', p_.change_context(
                        r_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
                                    "classes": null,
                                    "content": null,
                                }),
                            },
                        ),
                        (
                            $,
                        ) => ({
                            'classes': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'classes',
                                    },
                                ),
                                (
                                    $,
                                ) => Classes(
                                    $,
                                    abort,
                                ),
                            ),
                            'content': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'content',
                                    },
                                ),
                                (
                                    $,
                                ) => Flow_Content(
                                    $,
                                    abort,
                                ),
                            ),
                        }),
                    )],
                )
                case "table": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['table', p_.change_context(
                        r_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
                                    "classes": null,
                                    "sections": null,
                                }),
                            },
                        ),
                        (
                            $,
                        ) => ({
                            'classes': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'classes',
                                    },
                                ),
                                (
                                    $,
                                ) => Classes(
                                    $,
                                    abort,
                                ),
                            ),
                            'sections': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'sections',
                                    },
                                ),
                                (
                                    $,
                                ) => p_.from.list(r_unmarshalled_from_parse_tree.List(
                                    $,
                                    abort,
                                )['items']).map(
                                    (
                                        $,
                                    ) => p_.change_context(
                                        $['value'],
                                        (
                                            $,
                                        ) => p_.change_context(
                                            r_unmarshalled_from_parse_tree.Verbose_Group(
                                                $,
                                                abort,
                                                {
                                                    'expected properties': p_.literal.dictionary({
                                                        "classes": null,
                                                        "type": null,
                                                        "rows": null,
                                                    }),
                                                },
                                            ),
                                            (
                                                $,
                                            ) => ({
                                                'classes': p_.change_context(
                                                    r_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        abort,
                                                        {
                                                            'id': 'classes',
                                                        },
                                                    ),
                                                    (
                                                        $,
                                                    ) => Classes(
                                                        $,
                                                        abort,
                                                    ),
                                                ),
                                                'type': p_.change_context(
                                                    r_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        abort,
                                                        {
                                                            'id': 'type',
                                                        },
                                                    ),
                                                    (
                                                        $,
                                                    ) => p_.change_context(
                                                        r_unmarshalled_from_parse_tree.State(
                                                            $,
                                                            abort,
                                                        ),
                                                        (
                                                            $,
                                                        ) => p_.from.text($['option']['token']['value']).to_state(
                                                            (
                                                                $text,
                                                            ): s_target.Flow_Element.table.sections.L.type_ => {
                                                                switch ($text) {
                                                                    case "header": return p_.change_context(
                                                                        $['value'],
                                                                        (
                                                                            $,
                                                                        ) => ['header', r_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            abort,
                                                                        )],
                                                                    )
                                                                    case "body": return p_.change_context(
                                                                        $['value'],
                                                                        (
                                                                            $,
                                                                        ) => ['body', r_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            abort,
                                                                        )],
                                                                    )
                                                                    case "footer": return p_.change_context(
                                                                        $['value'],
                                                                        (
                                                                            $,
                                                                        ) => ['footer', r_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            abort,
                                                                        )],
                                                                    )
                                                                    default: return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': $['option']['range'],
                                                                        }],
                                                                    )
                                                                }
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                'rows': p_.change_context(
                                                    r_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        abort,
                                                        {
                                                            'id': 'rows',
                                                        },
                                                    ),
                                                    (
                                                        $,
                                                    ) => p_.from.list(r_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        abort,
                                                    )['items']).map(
                                                        (
                                                            $,
                                                        ) => p_.change_context(
                                                            $['value'],
                                                            (
                                                                $,
                                                            ) => p_.change_context(
                                                                r_unmarshalled_from_parse_tree.Verbose_Group(
                                                                    $,
                                                                    abort,
                                                                    {
                                                                        'expected properties': p_.literal.dictionary({
                                                                            "classes": null,
                                                                            "height": null,
                                                                            "cells": null,
                                                                        }),
                                                                    },
                                                                ),
                                                                (
                                                                    $,
                                                                ) => ({
                                                                    'classes': p_.change_context(
                                                                        r_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            abort,
                                                                            {
                                                                                'id': 'classes',
                                                                            },
                                                                        ),
                                                                        (
                                                                            $,
                                                                        ) => Classes(
                                                                            $,
                                                                            abort,
                                                                        ),
                                                                    ),
                                                                    'height': p_.change_context(
                                                                        r_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            abort,
                                                                            {
                                                                                'id': 'height',
                                                                            },
                                                                        ),
                                                                        (
                                                                            $,
                                                                        ) => p_.from.optional(r_unmarshalled_from_parse_tree.Optional(
                                                                            $,
                                                                            abort,
                                                                        )['optional']).map(
                                                                            (
                                                                                $,
                                                                            ) => r_unmarshalled_from_parse_tree.Number(
                                                                                $,
                                                                                abort,
                                                                                {
                                                                                    'type': ['decimal', null],
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'cells': p_.change_context(
                                                                        r_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            abort,
                                                                            {
                                                                                'id': 'cells',
                                                                            },
                                                                        ),
                                                                        (
                                                                            $,
                                                                        ) => p_.from.list(r_unmarshalled_from_parse_tree.List(
                                                                            $,
                                                                            abort,
                                                                        )['items']).map(
                                                                            (
                                                                                $,
                                                                            ) => p_.change_context(
                                                                                $['value'],
                                                                                (
                                                                                    $,
                                                                                ) => p_.change_context(
                                                                                    r_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                        $,
                                                                                        abort,
                                                                                        {
                                                                                            'expected properties': p_.literal.dictionary({
                                                                                                "type": null,
                                                                                                "colspan": null,
                                                                                                "classes": null,
                                                                                                "content": null,
                                                                                            }),
                                                                                        },
                                                                                    ),
                                                                                    (
                                                                                        $,
                                                                                    ) => ({
                                                                                        'type': p_.change_context(
                                                                                            r_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                abort,
                                                                                                {
                                                                                                    'id': 'type',
                                                                                                },
                                                                                            ),
                                                                                            (
                                                                                                $,
                                                                                            ) => p_.change_context(
                                                                                                r_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    abort,
                                                                                                ),
                                                                                                (
                                                                                                    $,
                                                                                                ) => p_.from.text($['option']['token']['value']).to_state(
                                                                                                    (
                                                                                                        $text,
                                                                                                    ): s_target.Flow_Element.table.sections.L.rows.L.cells.L.type_ => {
                                                                                                        switch ($text) {
                                                                                                            case "th": return p_.change_context(
                                                                                                                $['value'],
                                                                                                                (
                                                                                                                    $,
                                                                                                                ) => ['th', r_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    abort,
                                                                                                                )],
                                                                                                            )
                                                                                                            case "td": return p_.change_context(
                                                                                                                $['value'],
                                                                                                                (
                                                                                                                    $,
                                                                                                                ) => ['td', r_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    abort,
                                                                                                                )],
                                                                                                            )
                                                                                                            default: return abort(
                                                                                                                ['liana', {
                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                    'range': $['option']['range'],
                                                                                                                }],
                                                                                                            )
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'colspan': p_.change_context(
                                                                                            r_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                abort,
                                                                                                {
                                                                                                    'id': 'colspan',
                                                                                                },
                                                                                            ),
                                                                                            (
                                                                                                $,
                                                                                            ) => p_.from.optional(r_unmarshalled_from_parse_tree.Optional(
                                                                                                $,
                                                                                                abort,
                                                                                            )['optional']).map(
                                                                                                (
                                                                                                    $,
                                                                                                ) => r_unmarshalled_from_parse_tree.Number(
                                                                                                    $,
                                                                                                    abort,
                                                                                                    {
                                                                                                        'type': ['decimal', null],
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'classes': p_.change_context(
                                                                                            r_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                abort,
                                                                                                {
                                                                                                    'id': 'classes',
                                                                                                },
                                                                                            ),
                                                                                            (
                                                                                                $,
                                                                                            ) => Classes(
                                                                                                $,
                                                                                                abort,
                                                                                            ),
                                                                                        ),
                                                                                        'content': p_.change_context(
                                                                                            r_unmarshalled_from_parse_tree.Property(
                                                                                                $,
                                                                                                abort,
                                                                                                {
                                                                                                    'id': 'content',
                                                                                                },
                                                                                            ),
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
                                                                        ),
                                                                    ),
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        }),
                    )],
                )
                case "span": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['span', Phrasing_Content(
                        $,
                        abort,
                    )],
                )
                case "label": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['label', p_.change_context(
                        r_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
                                    "classes": null,
                                    "text": null,
                                    "content": null,
                                }),
                            },
                        ),
                        (
                            $,
                        ) => ({
                            'classes': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'classes',
                                    },
                                ),
                                (
                                    $,
                                ) => Classes(
                                    $,
                                    abort,
                                ),
                            ),
                            'text': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'text',
                                    },
                                ),
                                (
                                    $,
                                ) => r_unmarshalled_from_parse_tree.Text(
                                    $,
                                    abort,
                                ),
                            ),
                            'content': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'content',
                                    },
                                ),
                                (
                                    $,
                                ) => Flow_Content(
                                    $,
                                    abort,
                                ),
                            ),
                        }),
                    )],
                )
                case "img": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['img', p_.change_context(
                        r_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
                                    "classes": null,
                                    "src": null,
                                    "alt": null,
                                    "width": null,
                                    "height": null,
                                }),
                            },
                        ),
                        (
                            $,
                        ) => ({
                            'classes': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'classes',
                                    },
                                ),
                                (
                                    $,
                                ) => Classes(
                                    $,
                                    abort,
                                ),
                            ),
                            'src': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'src',
                                    },
                                ),
                                (
                                    $,
                                ) => r_unmarshalled_from_parse_tree.Text(
                                    $,
                                    abort,
                                ),
                            ),
                            'alt': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'alt',
                                    },
                                ),
                                (
                                    $,
                                ) => r_unmarshalled_from_parse_tree.Text(
                                    $,
                                    abort,
                                ),
                            ),
                            'width': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'width',
                                    },
                                ),
                                (
                                    $,
                                ) => p_.from.optional(r_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    abort,
                                )['optional']).map(
                                    (
                                        $,
                                    ) => r_unmarshalled_from_parse_tree.Number(
                                        $,
                                        abort,
                                        {
                                            'type': ['decimal', null],
                                        },
                                    ),
                                ),
                            ),
                            'height': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'height',
                                    },
                                ),
                                (
                                    $,
                                ) => p_.from.optional(r_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    abort,
                                )['optional']).map(
                                    (
                                        $,
                                    ) => r_unmarshalled_from_parse_tree.Number(
                                        $,
                                        abort,
                                        {
                                            'type': ['decimal', null],
                                        },
                                    ),
                                ),
                            ),
                        }),
                    )],
                )
                default: return abort(
                    ['liana', {
                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                        'range': $['option']['range'],
                    }],
                )
            }
        },
    ),
)

export const Flow_Content: declarations.Flow_Content = (
    $,
    abort,
) => p_.from.list(r_unmarshalled_from_parse_tree.List(
    $,
    abort,
)['items']).map(
    (
        $,
    ) => p_.change_context(
        $['value'],
        (
            $,
        ) => Flow_Element(
            $,
            abort,
        ),
    ),
)

export const Classes: declarations.Classes = (
    $,
    abort,
) => p_.from.list(r_unmarshalled_from_parse_tree.List(
    $,
    abort,
)['items']).map(
    (
        $,
    ) => p_.change_context(
        $['value'],
        (
            $,
        ) => r_unmarshalled_from_parse_tree.Text(
            $,
            abort,
        ),
    ),
)

export const Phrasing_Content: declarations.Phrasing_Content = (
    $,
    abort,
) => p_.from.list(r_unmarshalled_from_parse_tree.List(
    $,
    abort,
)['items']).map(
    (
        $,
    ) => p_.change_context(
        $['value'],
        (
            $,
        ) => Phrasing_Element(
            $,
            abort,
        ),
    ),
)

export const Phrasing_Element: declarations.Phrasing_Element = (
    $,
    abort,
) => p_.change_context(
    r_unmarshalled_from_parse_tree.State(
        $,
        abort,
    ),
    (
        $,
    ) => p_.from.text($['option']['token']['value']).to_state(
        (
            $text,
        ): s_target.Phrasing_Element => {
            switch ($text) {
                case "span": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['span', Phrasing_Content(
                        $,
                        abort,
                    )],
                )
                case "classified span": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['classified span', p_.change_context(
                        r_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
                                    "classes": null,
                                    "content": null,
                                }),
                            },
                        ),
                        (
                            $,
                        ) => ({
                            'classes': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'classes',
                                    },
                                ),
                                (
                                    $,
                                ) => Classes(
                                    $,
                                    abort,
                                ),
                            ),
                            'content': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'content',
                                    },
                                ),
                                (
                                    $,
                                ) => Phrasing_Content(
                                    $,
                                    abort,
                                ),
                            ),
                        }),
                    )],
                )
                case "titled span": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['titled span', p_.change_context(
                        r_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
                                    "title": null,
                                    "content": null,
                                }),
                            },
                        ),
                        (
                            $,
                        ) => ({
                            'title': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'title',
                                    },
                                ),
                                (
                                    $,
                                ) => r_unmarshalled_from_parse_tree.Text(
                                    $,
                                    abort,
                                ),
                            ),
                            'content': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'content',
                                    },
                                ),
                                (
                                    $,
                                ) => Phrasing_Content(
                                    $,
                                    abort,
                                ),
                            ),
                        }),
                    )],
                )
                case "a": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['a', p_.change_context(
                        r_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
                                    "text": null,
                                    "href": null,
                                }),
                            },
                        ),
                        (
                            $,
                        ) => ({
                            'text': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'text',
                                    },
                                ),
                                (
                                    $,
                                ) => r_unmarshalled_from_parse_tree.Text(
                                    $,
                                    abort,
                                ),
                            ),
                            'href': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'href',
                                    },
                                ),
                                (
                                    $,
                                ) => r_unmarshalled_from_parse_tree.Text(
                                    $,
                                    abort,
                                ),
                            ),
                        }),
                    )],
                )
                case "p": return p_.change_context(
                    $['value'],
                    (
                        $,
                    ) => ['p', p_.change_context(
                        r_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
                                    "text": null,
                                }),
                            },
                        ),
                        (
                            $,
                        ) => ({
                            'text': p_.change_context(
                                r_unmarshalled_from_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': 'text',
                                    },
                                ),
                                (
                                    $,
                                ) => r_unmarshalled_from_parse_tree.Text(
                                    $,
                                    abort,
                                ),
                            ),
                        }),
                    )],
                )
                default: return abort(
                    ['liana', {
                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                        'range': $['option']['range'],
                    }],
                )
            }
        },
    ),
)
