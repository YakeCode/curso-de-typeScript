# Configuracion

## instalacion por proyecto

npm init -y
npm install typescript --save-dev

### ver version

tsc --version || tsc -V

## crear archivo .editconfig con este contenido

# Editor configuration, see https://editorconfig.org

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

- instalar editor config

* crear una carpeta src
