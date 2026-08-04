#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 SaaS Smart Engine CLI v1.0.0');
console.log('🤖 Motor Inteligente de Agentes para Construir Tu Plataforma SaaS Sin Fallos');
console.log('================================================================================');

const targetDir = process.cwd();
const sourceSkillsDir = path.join(__dirname, '..', 'skills');
const targetSkillsDir = path.join(targetDir, '.agents', 'skills');
const targetAgentsMd = path.join(targetDir, 'AGENTS.md');
const sourceAgentsMd = path.join(__dirname, '..', 'AGENTS.md');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((child) => {
      copyRecursive(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  console.log(`📦 Instalando Ecosistema SaaS Smart Engine en: ${targetDir}`);
  
  if (fs.existsSync(sourceSkillsDir)) {
    copyRecursive(sourceSkillsDir, targetSkillsDir);
    console.log('✅ Skills especializadas para SaaS instaladas en .agents/skills/');
  }

  if (fs.existsSync(sourceAgentsMd) && !fs.existsSync(targetAgentsMd)) {
    fs.copyFileSync(sourceAgentsMd, targetAgentsMd);
    console.log('✅ AGENTS.md instalado con barandas de seguridad y doctrina maestra.');
  }

  console.log('🎉 ¡SaaS Smart Engine activado con éxito!');
  console.log('💡 Inicia tu agente de IA y ejecuta el comando /smart para comenzar el flujo automático.');
} catch (error) {
  console.error('❌ Error al instalar SaaS Smart Engine:', error.message);
  process.exit(1);
}
