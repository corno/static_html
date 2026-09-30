import * as p_ from 'pareto-core/refiner'

// schemas
import * as s_target from "../schema.js"
import * as s_source from "astn-core/modules/deserialization/schemas/list_of_characters/schema"
import * as s_error from "liana-core/modules/unresolved_document_deserialization/schemas/unresolved_document_deserialization/schema"
import * as s_parameters from "liana-core/modules/unresolved_document_deserialization/schemas/unresolved_document_deserialization/schema"

// refiner dependencies
import * as r_from_parse_tree from "./astn_parse_tree.js"
import * as r_parse_tree_from_list_of_characters from "astn-core/modules/deserialization/schemas/parse_tree/refiners/list_of_characters"

export namespace declarations {
    
    export type Document = p_.Refiner_With_Parameter<
        s_target.Document,
        s_error.Error,
        s_source.List_Of_Characters,
        s_parameters.Parameters
    >
    
    export type Root = p_.Refiner_With_Parameter<
        s_target.Root,
        s_error.Error,
        s_source.List_Of_Characters,
        s_parameters.Parameters
    >
    
    export type Flow_Element = p_.Refiner_With_Parameter<
        s_target.Flow_Element,
        s_error.Error,
        s_source.List_Of_Characters,
        s_parameters.Parameters
    >
    
    export type Flow_Content = p_.Refiner_With_Parameter<
        s_target.Flow_Content,
        s_error.Error,
        s_source.List_Of_Characters,
        s_parameters.Parameters
    >
    
    export type Classes = p_.Refiner_With_Parameter<
        s_target.Classes,
        s_error.Error,
        s_source.List_Of_Characters,
        s_parameters.Parameters
    >
    
    export type Phrasing_Content = p_.Refiner_With_Parameter<
        s_target.Phrasing_Content,
        s_error.Error,
        s_source.List_Of_Characters,
        s_parameters.Parameters
    >
    
    export type Phrasing_Element = p_.Refiner_With_Parameter<
        s_target.Phrasing_Element,
        s_error.Error,
        s_source.List_Of_Characters,
        s_parameters.Parameters
    >
}

// implementations

export const Document: declarations.Document = (
    $,
    abort,
    $p,
) => r_from_parse_tree.Document(
    r_parse_tree_from_list_of_characters.Document(
        $,
        (
            $,
        ) => abort(['parse tree deserialization', $]),
        $p,
    )['content'],
    (
        $,
    ) => abort(['unmarshalling', $]),
)

export const Root: declarations.Root = (
    $,
    abort,
    $p,
) => r_from_parse_tree.Root(
    r_parse_tree_from_list_of_characters.Document(
        $,
        (
            $,
        ) => abort(['parse tree deserialization', $]),
        $p,
    )['content'],
    (
        $,
    ) => abort(['unmarshalling', $]),
)

export const Flow_Element: declarations.Flow_Element = (
    $,
    abort,
    $p,
) => r_from_parse_tree.Flow_Element(
    r_parse_tree_from_list_of_characters.Document(
        $,
        (
            $,
        ) => abort(['parse tree deserialization', $]),
        $p,
    )['content'],
    (
        $,
    ) => abort(['unmarshalling', $]),
)

export const Flow_Content: declarations.Flow_Content = (
    $,
    abort,
    $p,
) => r_from_parse_tree.Flow_Content(
    r_parse_tree_from_list_of_characters.Document(
        $,
        (
            $,
        ) => abort(['parse tree deserialization', $]),
        $p,
    )['content'],
    (
        $,
    ) => abort(['unmarshalling', $]),
)

export const Classes: declarations.Classes = (
    $,
    abort,
    $p,
) => r_from_parse_tree.Classes(
    r_parse_tree_from_list_of_characters.Document(
        $,
        (
            $,
        ) => abort(['parse tree deserialization', $]),
        $p,
    )['content'],
    (
        $,
    ) => abort(['unmarshalling', $]),
)

export const Phrasing_Content: declarations.Phrasing_Content = (
    $,
    abort,
    $p,
) => r_from_parse_tree.Phrasing_Content(
    r_parse_tree_from_list_of_characters.Document(
        $,
        (
            $,
        ) => abort(['parse tree deserialization', $]),
        $p,
    )['content'],
    (
        $,
    ) => abort(['unmarshalling', $]),
)

export const Phrasing_Element: declarations.Phrasing_Element = (
    $,
    abort,
    $p,
) => r_from_parse_tree.Phrasing_Element(
    r_parse_tree_from_list_of_characters.Document(
        $,
        (
            $,
        ) => abort(['parse tree deserialization', $]),
        $p,
    )['content'],
    (
        $,
    ) => abort(['unmarshalling', $]),
)
