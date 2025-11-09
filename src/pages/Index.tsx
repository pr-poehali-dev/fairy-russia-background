import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const characters = [
  {
    id: 1,
    name: 'Баба-Яга',
    description: 'Живёт в избушке на курьих ножках и помогает героям добрым советом',
    emoji: '🧙‍♀️',
    color: 'bg-fairy-purple'
  },
  {
    id: 2,
    name: 'Иван-царевич',
    description: 'Смелый и добрый герой русских сказок',
    emoji: '🤴',
    color: 'bg-fairy-blue'
  },
  {
    id: 3,
    name: 'Жар-птица',
    description: 'Волшебная птица с золотыми перьями',
    emoji: '🦚',
    color: 'bg-fairy-gold'
  },
  {
    id: 4,
    name: 'Василиса Премудрая',
    description: 'Самая мудрая и красивая девица',
    emoji: '👸',
    color: 'bg-fairy-pink'
  },
  {
    id: 5,
    name: 'Кощей Бессмертный',
    description: 'Хранитель темных тайн',
    emoji: '💀',
    color: 'bg-gray-700'
  },
  {
    id: 6,
    name: 'Змей Горыныч',
    description: 'Трёхглавый дракон-страж',
    emoji: '🐉',
    color: 'bg-fairy-orange'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'characters'>('home');
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-fairy-cream via-background to-fairy-purple/10 font-sans">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/e113f122-3002-45c5-bf00-02d6b9523b07/files/ef148ef9-c483-46b1-a4e0-7fbcb8d66014.jpg)' }}
      />
      
      <div className="relative z-10">
        <nav className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold font-rubik bg-gradient-to-r from-fairy-purple to-fairy-pink bg-clip-text text-transparent">
                ✨ Сказочная Русь
              </h1>
              <div className="flex gap-4">
                <Button
                  variant={activeSection === 'home' ? 'default' : 'outline'}
                  onClick={() => setActiveSection('home')}
                  className="font-rubik transition-all hover:scale-105"
                >
                  <Icon name="Home" size={18} className="mr-2" />
                  Главная
                </Button>
                <Button
                  variant={activeSection === 'characters' ? 'default' : 'outline'}
                  onClick={() => setActiveSection('characters')}
                  className="font-rubik transition-all hover:scale-105"
                >
                  <Icon name="Users" size={18} className="mr-2" />
                  Персонажи
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {activeSection === 'home' && (
          <section className="container mx-auto px-4 py-20 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 animate-float">
                <span className="text-9xl">🏰</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold font-rubik mb-6 bg-gradient-to-r from-fairy-purple via-fairy-pink to-fairy-orange bg-clip-text text-transparent">
                Добро пожаловать в мир русских сказок!
              </h2>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
                Окунись в волшебный мир приключений, где живут добрые и злые герои, 
                происходят чудеса и всегда побеждает добро!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  size="lg" 
                  className="font-rubik text-lg hover:scale-105 transition-transform shadow-xl"
                  onClick={() => setActiveSection('characters')}
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Познакомиться с героями
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-rubik text-lg hover:scale-105 transition-transform"
                >
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Читать сказки
                </Button>
              </div>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:scale-105 transition-transform duration-300 bg-white/90 backdrop-blur animate-scale-in border-2 border-fairy-purple/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4 animate-sparkle">⭐</div>
                    <h3 className="font-rubik font-semibold text-xl mb-2 text-fairy-purple">Интерактивные уроки</h3>
                    <p className="text-foreground/70">Учись через игру и приключения</p>
                  </CardContent>
                </Card>
                <Card className="hover:scale-105 transition-transform duration-300 bg-white/90 backdrop-blur animate-scale-in border-2 border-fairy-pink/20" style={{animationDelay: '0.1s'}}>
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4 animate-sparkle" style={{animationDelay: '0.5s'}}>🎨</div>
                    <h3 className="font-rubik font-semibold text-xl mb-2 text-fairy-pink">Яркие иллюстрации</h3>
                    <p className="text-foreground/70">Красочные картинки к каждой сказке</p>
                  </CardContent>
                </Card>
                <Card className="hover:scale-105 transition-transform duration-300 bg-white/90 backdrop-blur animate-scale-in border-2 border-fairy-orange/20" style={{animationDelay: '0.2s'}}>
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4 animate-sparkle" style={{animationDelay: '1s'}}>🎭</div>
                    <h3 className="font-rubik font-semibold text-xl mb-2 text-fairy-orange">Живые персонажи</h3>
                    <p className="text-foreground/70">Анимированные герои сказок</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'characters' && (
          <section className="container mx-auto px-4 py-20 animate-fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-rubik mb-4 text-center bg-gradient-to-r from-fairy-purple to-fairy-pink bg-clip-text text-transparent">
                Герои русских сказок
              </h2>
              <p className="text-center text-xl text-foreground/70 mb-12">
                Нажми на карточку, чтобы узнать больше о персонаже
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {characters.map((character, index) => (
                  <Card 
                    key={character.id}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/90 backdrop-blur border-2 animate-scale-in ${
                      selectedCharacter === character.id 
                        ? 'ring-4 ring-fairy-purple shadow-2xl scale-105' 
                        : 'border-fairy-purple/20'
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                    onClick={() => setSelectedCharacter(selectedCharacter === character.id ? null : character.id)}
                  >
                    <CardContent className="p-6">
                      <div className={`${character.color} w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 transition-transform ${
                        selectedCharacter === character.id ? 'animate-float' : ''
                      }`}>
                        {character.emoji}
                      </div>
                      <h3 className="font-rubik font-bold text-2xl mb-2 text-center text-foreground">
                        {character.name}
                      </h3>
                      <p className={`text-foreground/70 text-center transition-all duration-300 ${
                        selectedCharacter === character.id ? 'text-base' : 'text-sm'
                      }`}>
                        {character.description}
                      </p>
                      {selectedCharacter === character.id && (
                        <div className="mt-4 pt-4 border-t border-fairy-purple/20 animate-fade-in">
                          <Button className="w-full font-rubik" variant="outline">
                            <Icon name="BookOpen" size={16} className="mr-2" />
                            Читать сказки с героем
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <footer className="bg-white/80 backdrop-blur-sm mt-20 py-8 border-t border-fairy-purple/20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-foreground/70 font-rubik">
              ✨ Сказочная Русь — образовательный портал для изучения народных сказок
            </p>
            <p className="text-foreground/50 text-sm mt-2">
              Создано с любовью для маленьких читателей 📚
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
