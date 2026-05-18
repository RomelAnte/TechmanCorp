# TechmanCorp

Maqueta estatica organizada por dominios funcionales y recursos compartidos.

## Estructura

```text
.
|-- assets/
|   |-- css/
|   |   |-- base/
|   |   |-- landing/
|   |   `-- pages/
|   |-- images/
|   `-- js/
|-- pages/
|   |-- admin/
|   |   |-- areas-trabajo/
|   |   |-- clientes/
|   |   |-- compras/
|   |   |-- empleados/
|   |   |-- especialidad/
|   |   |-- inventario/
|   |   |-- ordenes-trabajo/
|   |   |-- perfiles/
|   |   |-- reportes/
|   |   |-- solicitudes/
|   |   |-- ventas/
|   |   `-- index.html
|   |-- client/
|   `-- support/
|       `-- reclamos/
|-- index.html
`-- README.md
```

## Convencion usada

- `assets/`: estilos, scripts e imagenes reutilizables.
- `pages/admin/`: vistas del empleado y gestion interna.
- `pages/client/`: tienda, catalogo, login y detalles visibles para cliente.
- `pages/support/reclamos/`: vistas aisladas del flujo de reclamos.
- `index.html`: puerta de entrada principal del proyecto.

## Nota

Se actualizaron las rutas locales para que la maqueta siga funcionando con la nueva estructura.
