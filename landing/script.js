// WOW+ Landing — Renderização do hub e da landing por persona.

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag)
  if (opts.className) node.className = opts.className
  if (opts.text != null) node.textContent = opts.text
  if (opts.html != null) node.innerHTML = opts.html
  if (opts.attrs) {
    for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v)
  }
  for (const c of children) if (c) node.appendChild(c)
  return node
}

/* ===== HUB ===== */
function renderHub() {
  const grid = document.getElementById('persona-grid')
  if (!grid) return
  grid.innerHTML = ''
  for (const p of window.PERSONAS) {
    const card = el('a', {
      className: 'persona-card',
      attrs: { href: `persona.html?persona=${p.id}` },
    })

    const head = el('div', { className: 'persona-card-head' })
    head.appendChild(el('span', { className: 'persona-icon', text: p.icon }))
    const headInfo = el('div')
    headInfo.appendChild(el('h2', { text: p.name }))
    headInfo.appendChild(el('p', { className: 'role', text: p.role }))
    head.appendChild(headInfo)
    card.appendChild(head)

    card.appendChild(el('p', { className: 'desc', text: p.description }))

    const cta = el('span', { className: 'cta' })
    cta.appendChild(document.createTextNode(`Quero ser ${p.name} `))
    cta.appendChild(el('span', { className: 'arrow', text: '→' }))
    card.appendChild(cta)

    grid.appendChild(card)
  }
}

/* ===== PERSONA LANDING ===== */
function getQueryParam(name) {
  const u = new URL(window.location.href)
  return u.searchParams.get(name)
}

function renderPersonaPage() {
  const id = getQueryParam('persona') || 'cliente'
  const persona = window.getPersona(id)

  if (!persona) {
    document.querySelector('main').innerHTML =
      '<section class="hub-hero"><h1>Persona não encontrada</h1><p>Volte para <a href="index.html">a página de personas</a>.</p></section>'
    return
  }

  document.title = `Seja ${persona.name} WOW+`
  const descMeta = document.getElementById('page-description')
  if (descMeta) descMeta.setAttribute('content', persona.description)

  // Hero
  setText('hero-persona-name', persona.name)
  setText('hero-icon', persona.icon)
  setText('hero-headline', persona.headline)
  setText('hero-tagline', persona.tagline)
  setText('hero-description', persona.description)
  setText('hero-card-icon', persona.icon)
  setText('hero-card-role', persona.role)

  const heroList = document.getElementById('hero-card-list')
  heroList.innerHTML = ''
  for (const b of persona.benefits.slice(0, 3)) {
    const li = el('li')
    li.appendChild(el('span', { className: 'check', text: '✓' }))
    const span = el('span')
    span.innerHTML = `<strong>${escapeHtml(b.title)}.</strong> ${escapeHtml(
      b.description,
    )}`
    li.appendChild(span)
    heroList.appendChild(li)
  }

  // Benefícios
  setText('benefits-persona-name', persona.name)
  const benefitsGrid = document.getElementById('benefits-grid')
  benefitsGrid.innerHTML = ''
  for (const b of persona.benefits) {
    const card = el('div', { className: 'card' })
    card.appendChild(el('span', { className: 'icon-dot', text: '✨' }))
    card.appendChild(el('h3', { text: b.title }))
    card.appendChild(el('p', { text: b.description }))
    benefitsGrid.appendChild(card)
  }

  // Steps
  setText('steps-count', String(persona.steps.length))
  const stepsList = document.getElementById('steps-list')
  stepsList.innerHTML = ''
  persona.steps.forEach((s, i) => {
    const li = el('li')
    li.appendChild(el('span', { className: 'step-num', text: String(i + 1) }))
    li.appendChild(el('h3', { text: s.title }))
    li.appendChild(el('p', { text: s.description }))
    stepsList.appendChild(li)
  })

  // Audience
  setText('audience-persona-name', persona.name)
  const audienceList = document.getElementById('audience-list')
  audienceList.innerHTML = ''
  for (const line of persona.audience) {
    const li = el('li')
    li.appendChild(el('span', { className: 'check', text: '✓' }))
    li.appendChild(el('span', { text: line }))
    audienceList.appendChild(li)
  }

  // Form
  setText('form-persona-name', persona.name)
  setText('submit-persona-name', persona.name)
  setText('info-persona-name', persona.name)
  document.getElementById('form-persona-id').value = persona.id

  configureFormForPersona(persona)
  bindFormSubmit(persona)

  // FAQ
  const faqList = document.getElementById('faq-list')
  faqList.innerHTML = ''
  for (const item of persona.faq) {
    const details = el('details')
    const summary = el('summary')
    summary.appendChild(document.createTextNode(item.question))
    summary.appendChild(el('span', { className: 'toggle', text: '+' }))
    details.appendChild(summary)
    details.appendChild(el('p', { text: item.answer }))
    faqList.appendChild(details)
  }

  // Outras personas
  const otherGrid = document.getElementById('other-grid')
  otherGrid.innerHTML = ''
  for (const p of window.PERSONAS) {
    if (p.id === persona.id) continue
    const link = el('a', {
      className: 'other-card',
      attrs: { href: `persona.html?persona=${p.id}` },
    })
    link.appendChild(el('span', { className: 'persona-icon', text: p.icon }))
    const info = el('div', { className: 'info' })
    info.appendChild(el('p', { className: 'name', text: p.name }))
    info.appendChild(el('p', { className: 'role', text: p.role }))
    link.appendChild(info)
    otherGrid.appendChild(link)
  }
}

function configureFormForPersona(persona) {
  const docLabel = document.getElementById('doc-label')
  const docInput = document.getElementById('documento')
  const razaoRow = document.getElementById('razao-row')
  const razaoInput = document.getElementById('razaoSocial')

  if (persona.isBusiness) {
    docLabel.textContent = 'CNPJ'
    docInput.placeholder = '00.000.000/0000-00'
    docInput.name = 'cnpj'
    razaoRow.style.display = ''
    razaoInput.required = true
  } else {
    docLabel.textContent = 'CPF'
    docInput.placeholder = '000.000.000-00'
    docInput.name = 'cpf'
    razaoRow.style.display = 'none'
    razaoInput.required = false
  }
}

function bindFormSubmit(persona) {
  const form = document.getElementById('registration-form')
  const card = document.getElementById('form-card')
  const submitBtn = document.getElementById('submit-btn')
  if (!form) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    submitBtn.disabled = true
    submitBtn.textContent = 'Enviando...'

    // Placeholder: integrar com endpoint real quando disponível.
    const data = Object.fromEntries(new FormData(form).entries())
    console.log('Cadastro WOW+ recebido:', data)

    await new Promise((r) => setTimeout(r, 700))

    card.innerHTML = `
      <div class="success">
        <div class="icon">✓</div>
        <h3>Cadastro recebido!</h3>
        <p>Em breve nosso time entrará em contato para finalizar sua adesão como ${escapeHtml(
          persona.name,
        )}.</p>
      </div>
    `
  })
}

function setText(id, value) {
  const node = document.getElementById(id)
  if (node) node.textContent = value
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
