"use client";
import React from 'react';
import {  Heart,  Award, Shield,  CreditCard, Wallet, DollarSign } from 'lucide-react';
import toast from 'react-hot-toast';



export default function Doar() {

  const [donationAmount, setDonationAmount] = React.useState('100');
  const [customAmount, setCustomAmount] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('credit');

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de processamento da doação
    toast('Doação ainda não disponível');
  };

  return ( 
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl mt-16">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Faça sua Doação</h1>
          <p className="text-xl text-gray-600">Sua generosidade faz a diferença em nossa comunidade</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleDonationSubmit}>
            {/* Valores predefinidos */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Escolha o valor da doação</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['50', '100', '200', '500'].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setDonationAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      donationAmount === amount && !customAmount
                        ? 'border-orange-600 bg-orange-50 text-orange-600'
                        : 'border-gray-200 hover:border-orange-600'
                    }`}
                  >
                    <div className="text-2xl font-bold mb-1">R${amount}</div>
                    <div className="text-sm text-gray-600">Doar</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Valor personalizado */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-4">Ou digite um valor personalizado</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setDonationAmount('');
                  }}
                  placeholder="Digite o valor"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-colors"
                />
              </div>
            </div>

            {/* Método de pagamento */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Método de pagamento</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-3 ${
                    paymentMethod === 'credit'
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-600'
                  }`}
                >
                  <CreditCard className={`w-6 h-6 ${paymentMethod === 'credit' ? 'text-orange-600' : 'text-gray-600'}`} />
                  <span className={paymentMethod === 'credit' ? 'text-orange-600' : 'text-gray-600'}>Cartão de Crédito</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-3 ${
                    paymentMethod === 'pix'
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-600'
                  }`}
                >
                  <Wallet className={`w-6 h-6 ${paymentMethod === 'pix' ? 'text-orange-600' : 'text-gray-600'}`} />
                  <span className={paymentMethod === 'pix' ? 'text-orange-600' : 'text-gray-600'}>PIX</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-3 ${
                    paymentMethod === 'boleto'
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-600'
                  }`}
                >
                  <DollarSign className={`w-6 h-6 ${paymentMethod === 'boleto' ? 'text-orange-600' : 'text-gray-600'}`} />
                  <span className={paymentMethod === 'boleto' ? 'text-orange-600' : 'text-gray-600'}>Boleto</span>
                </button>
              </div>
            </div>

            {/* Botão de doação */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5" />
              <span>Confirmar Doação</span>
            </button>
          </form>
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pagamento Seguro</h3>
            <p className="text-gray-600">Suas informações estão protegidas com a mais alta segurança</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Transparência</h3>
            <p className="text-gray-600">Acompanhe como sua doação está sendo utilizada</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Impacto Social</h3>
            <p className="text-gray-600">Sua doação transforma vidas em nossa comunidade</p>
          </div>
        </div>
      </div>
    </div>
  );
}