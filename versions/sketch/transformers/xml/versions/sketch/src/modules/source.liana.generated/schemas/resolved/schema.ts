import * as p_ from 'pareto-core/schema'

// types

namespace Document_ {
    
    export type css = string
    
    export type root = Flow_Element_
}

type Document_ = {
    readonly 'css': Document_.css
    readonly 'root': Document_.root
}

type Root_ = Document_

namespace Flow_Element_ {
    
    export type div = Flow_Content_
    
    export namespace dimensioned_div {
        
        export namespace width {
            
            export type O = number
        }
        
        export type width = p_.Optional_Value<
            width.O
        >
        
        export namespace height {
            
            export type O = number
        }
        
        export type height = p_.Optional_Value<
            height.O
        >
        
        export type content = Flow_Content_
    }
    
    export type dimensioned_div = {
        readonly 'width': dimensioned_div.width
        readonly 'height': dimensioned_div.height
        readonly 'content': dimensioned_div.content
    }
    
    export namespace classified_div {
        
        export type classes = Classes_
        
        export type content = Flow_Content_
    }
    
    export type classified_div = {
        readonly 'classes': classified_div.classes
        readonly 'content': classified_div.content
    }
    
    export namespace table {
        
        export type classes = Classes_
        
        export namespace sections {
            
            export namespace L {
                
                export type classes = Classes_
                
                export namespace type_ {
                    
                    export type header = null
                    
                    export type body = null
                    
                    export type footer = null
                }
                
                export type type_ = 
                    | readonly ['header', type_.header]
                    | readonly ['body', type_.body]
                    | readonly ['footer', type_.footer]
                
                export namespace rows {
                    
                    export namespace L {
                        
                        export type classes = Classes_
                        
                        export namespace height {
                            
                            export type O = number
                        }
                        
                        export type height = p_.Optional_Value<
                            height.O
                        >
                        
                        export namespace cells {
                            
                            export namespace L {
                                
                                export namespace type_ {
                                    
                                    export type th = null
                                    
                                    export type td = null
                                }
                                
                                export type type_ = 
                                    | readonly ['th', type_.th]
                                    | readonly ['td', type_.td]
                                
                                export namespace colspan {
                                    
                                    export type O = number
                                }
                                
                                export type colspan = p_.Optional_Value<
                                    colspan.O
                                >
                                
                                export type classes = Classes_
                                
                                export type content = Flow_Content_
                            }
                            
                            export type L = {
                                readonly 'type': L.type_
                                readonly 'colspan': L.colspan
                                readonly 'classes': L.classes
                                readonly 'content': L.content
                            }
                        }
                        
                        export type cells = p_.List<
                            cells.L
                        >
                    }
                    
                    export type L = {
                        readonly 'classes': L.classes
                        readonly 'height': L.height
                        readonly 'cells': L.cells
                    }
                }
                
                export type rows = p_.List<
                    rows.L
                >
            }
            
            export type L = {
                readonly 'classes': L.classes
                readonly 'type': L.type_
                readonly 'rows': L.rows
            }
        }
        
        export type sections = p_.List<
            sections.L
        >
    }
    
    export type table = {
        readonly 'classes': table.classes
        readonly 'sections': table.sections
    }
    
    export type span = Phrasing_Content_
    
    export namespace label {
        
        export type classes = Classes_
        
        export type text = string
        
        export type content = Flow_Content_
    }
    
    export type label = {
        readonly 'classes': label.classes
        readonly 'text': label.text
        readonly 'content': label.content
    }
    
    export namespace img {
        
        export type classes = Classes_
        
        export type src = string
        
        export type alt = string
        
        export namespace width {
            
            export type O = number
        }
        
        export type width = p_.Optional_Value<
            width.O
        >
        
        export namespace height {
            
            export type O = number
        }
        
        export type height = p_.Optional_Value<
            height.O
        >
    }
    
    export type img = {
        readonly 'classes': img.classes
        readonly 'src': img.src
        readonly 'alt': img.alt
        readonly 'width': img.width
        readonly 'height': img.height
    }
}

type Flow_Element_ = 
    | readonly ['div', Flow_Element_.div]
    | readonly ['dimensioned div', Flow_Element_.dimensioned_div]
    | readonly ['classified div', Flow_Element_.classified_div]
    | readonly ['table', Flow_Element_.table]
    | readonly ['span', Flow_Element_.span]
    | readonly ['label', Flow_Element_.label]
    | readonly ['img', Flow_Element_.img]

namespace Flow_Content_ {
    
    export type L = Flow_Element_
}

type Flow_Content_ = p_.List<
    Flow_Content_.L
>

namespace Classes_ {
    
    export type L = string
}

type Classes_ = p_.List<
    Classes_.L
>

namespace Phrasing_Content_ {
    
    export type L = Phrasing_Element_
}

type Phrasing_Content_ = p_.List<
    Phrasing_Content_.L
>

namespace Phrasing_Element_ {
    
    export type span = Phrasing_Content_
    
    export namespace classified_span {
        
        export type classes = Classes_
        
        export type content = Phrasing_Content_
    }
    
    export type classified_span = {
        readonly 'classes': classified_span.classes
        readonly 'content': classified_span.content
    }
    
    export namespace titled_span {
        
        export type title = string
        
        export type content = Phrasing_Content_
    }
    
    export type titled_span = {
        readonly 'title': titled_span.title
        readonly 'content': titled_span.content
    }
    
    export namespace a {
        
        export type text = string
        
        export type href = string
    }
    
    export type a = {
        readonly 'text': a.text
        readonly 'href': a.href
    }
    
    export namespace p {
        
        export type text = string
    }
    
    export type p = {
        readonly 'text': p.text
    }
}

type Phrasing_Element_ = 
    | readonly ['span', Phrasing_Element_.span]
    | readonly ['classified span', Phrasing_Element_.classified_span]
    | readonly ['titled span', Phrasing_Element_.titled_span]
    | readonly ['a', Phrasing_Element_.a]
    | readonly ['p', Phrasing_Element_.p]

// exported root types
export { 
    type Document_ as Document, 
    type Root_ as Root, 
    type Flow_Element_ as Flow_Element, 
    type Flow_Content_ as Flow_Content, 
    type Classes_ as Classes, 
    type Phrasing_Content_ as Phrasing_Content, 
    type Phrasing_Element_ as Phrasing_Element, 
}
