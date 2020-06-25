function fix(paragraph){
    return paragraph.replace(/(^|[.!?]\s+)([a-z])/g, l => l.toUpperCase())
    
    }