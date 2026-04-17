admin/config.yml
backend:
  name: github
  repo: Shoppress19/bricolati-fix  # تأكد أن هذا هو اسم مستودعك الحالي
  branch: main

media_folder: "images"

collections:
  - name: "posts"
    label: "المقالات والشروحات"
    folder: "content/posts"
    create: true
    fields:
      - {label: "العنوان", name: "title", widget: "string"}
      - {label: "تاريخ النشر", name: "date", widget: "datetime"}
      - {label: "صورة الجهاز", name: "image", widget: "image"}
      - {label: "وصف العطل والإصلاح", name: "body", widget: "markdown"}
