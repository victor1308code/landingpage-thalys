import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Clock, FileText, Video } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './Contato.css';

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = '5521983140249';
  const whatsappMessage = encodeURIComponent('Olá, Dr. Thalys! Gostaria de agendar uma teleconsulta.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create pre-filled WhatsApp message with form details
    const customMsg = encodeURIComponent(
      `Olá, Dr. Thalys!\n\nMeu nome é ${formData.name}.\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\n\nMotivo da consulta / queixa: ${formData.message}`
    );
    const directWaUrl = `https://wa.me/${whatsappNumber}?text=${customMsg}`;
    
    // Open WhatsApp in new tab
    window.open(directWaUrl, '_blank');
    
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="contato-section">
      <div className="container">
        
        <div className="section-header scroll-reveal reveal-down">
          <span>AGENDAMENTO & INFORMAÇÕES</span>
          <h2>Agende sua Teleconsulta</h2>
          <p>Entre em contato direto pelo WhatsApp ou envie uma mensagem para agendar seu atendimento particular online.</p>
        </div>

        <div className="contato-wrapper">
          
          {/* Coluna 1: Informações de Atendimento */}
          <div className="contato-info-column scroll-reveal reveal-left">
            <div className="contato-details">
              
              <div className="info-card">
                <div className="info-icon-wrapper">
                  <WhatsAppIcon size={24} className="info-icon" />
                </div>
                <div>
                  <h3>WhatsApp Direto</h3>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="info-link">
                    (21) 98314-0249
                  </a>
                  <span className="info-subtext">Atendimento direto pelo próprio Dr. Thalys</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Video className="info-icon" />
                </div>
                <div>
                  <h3>Modalidade de Atendimento</h3>
                  <p className="info-text">100% Telemedicina Online</p>
                  <span className="info-subtext">Atendimento seguro e confidencial para todo o Brasil</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Mail className="info-icon" />
                </div>
                <div>
                  <h3>E-mail Oficial</h3>
                  <a href="mailto:drthalyslayber@outlook.com" className="info-link">
                    drthalyslayber@outlook.com
                  </a>
                  <span className="info-subtext">Envio de documentos médicos e solicitações</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Clock className="info-icon" />
                </div>
                <div>
                  <h3>Horários & Agendamento</h3>
                  <p className="info-text">Segunda a Sexta-feira</p>
                  <span className="info-subtext">Consultas exclusivas com horário previamente agendado</span>
                </div>
              </div>

            </div>

            {/* Destaque de Atendimento Particular & Receita Digital */}
            <div className="contato-guarantee-card">
              <div className="guarantee-header">
                <FileText size={22} className="guarantee-icon" />
                <h4>Atendimento Particular & Receita Digital</h4>
              </div>
              <p>
                Atendimento médico dedicado, com emissão de receitas digitais, atestados e pedidos de exames com certificado ICP-Brasil aceitos em farmácias e laboratórios de todo o país.
              </p>
            </div>
          </div>

          {/* Coluna 2: Formulário */}
          <div className="contato-form-column scroll-reveal reveal-right delay-2">
            {submitted ? (
              <div className="form-success-container fade-in">
                <CheckCircle2 size={64} className="success-icon" />
                <h3>Mensagem Enviada!</h3>
                <p>Sua solicitação foi direcionada com sucesso para o WhatsApp do Dr. Thalys para confirmação do seu horário.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contato-form">
                <h3>Solicitar Agendamento Online</h3>
                <p className="form-sub">Preencha o formulário para iniciar seu agendamento no WhatsApp ou e-mail.</p>
                
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Ex: Seu Nome Completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">WhatsApp ou Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    placeholder="(21) 99999-9999"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Como podemos ajudar?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4"
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                    placeholder="Descreva se busca um check-up, queixa específica (ex: dores, cansaço, febre), controle de taxas ou risco cirúrgico..."
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary btn-submit">
                    <Send size={18} />
                    Enviar Solicitação
                  </button>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-direct-whatsapp">
                    <WhatsAppIcon size={19} />
                    WhatsApp Direto
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
