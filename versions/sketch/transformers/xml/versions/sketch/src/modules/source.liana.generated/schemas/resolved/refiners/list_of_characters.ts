import * as p_ from 'pareto-core/refiner'

// schemas
import * as s_target from "../schema.js"
import * as s_source from "astn-core/modules/deserialization/schemas/list_of_characters/schema"
import * as s_error from "liana-core/modules/resolved_document_deserialization/schemas/resolved_document_deserialization/schema"
import * as s_parameters from "liana-core/modules/resolved_document_deserialization/schemas/resolved_document_deserialization/schema"

// refiner dependencies
import * as r_from_unresolved from "./unresolved.js"
import * as r_unresolved_from_list_of_characters from "../../unresolved/refiners/list_of_characters.js"

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
) => r_from_unresolved.Document(
    r_unresolved_from_list_of_characters.Document(
        $,
        (
            $,
        ) => abort(['unresolved document deserialization', $]),
        $p,
    ),
    (
        $,
    ) => abort(['resolving', $]),
)

export const Root: declarations.Root = (
    $,
    abort,
    $p,
) => r_from_unresolved.Root(
    r_unresolved_from_list_of_characters.Root(
        $,
        (
            $,
        ) => abort(['unresolved document deserialization', $]),
        $p,
    ),
    (
        $,
    ) => abort(['resolving', $]),
)

export const Flow_Element: declarations.Flow_Element = (
    $,
    abort,
    $p,
) => r_from_unresolved.Flow_Element(
    r_unresolved_from_list_of_characters.Flow_Element(
        $,
        (
            $,
        ) => abort(['unresolved document deserialization', $]),
        $p,
    ),
    (
        $,
    ) => abort(['resolving', $]),
)

export const Flow_Content: declarations.Flow_Content = (
    $,
    abort,
    $p,
) => r_from_unresolved.Flow_Content(
    r_unresolved_from_list_of_characters.Flow_Content(
        $,
        (
            $,
        ) => abort(['unresolved document deserialization', $]),
        $p,
    ),
    (
        $,
    ) => abort(['resolving', $]),
)

export const Classes: declarations.Classes = (
    $,
    abort,
    $p,
) => r_from_unresolved.Classes(
    r_unresolved_from_list_of_characters.Classes(
        $,
        (
            $,
        ) => abort(['unresolved document deserialization', $]),
        $p,
    ),
    (
        $,
    ) => abort(['resolving', $]),
)

export const Phrasing_Content: declarations.Phrasing_Content = (
    $,
    abort,
    $p,
) => r_from_unresolved.Phrasing_Content(
    r_unresolved_from_list_of_characters.Phrasing_Content(
        $,
        (
            $,
        ) => abort(['unresolved document deserialization', $]),
        $p,
    ),
    (
        $,
    ) => abort(['resolving', $]),
)

export const Phrasing_Element: declarations.Phrasing_Element = (
    $,
    abort,
    $p,
) => r_from_unresolved.Phrasing_Element(
    r_unresolved_from_list_of_characters.Phrasing_Element(
        $,
        (
            $,
        ) => abort(['unresolved document deserialization', $]),
        $p,
    ),
    (
        $,
    ) => abort(['resolving', $]),
)
